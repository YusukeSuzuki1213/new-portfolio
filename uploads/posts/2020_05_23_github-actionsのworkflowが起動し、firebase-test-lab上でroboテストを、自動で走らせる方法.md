---
title: Github Actionsのworkflowが起動し、Firebase Test Lab上でRoboテストを、自動で走らせる方法
summary: 本記事ではGithub Actionsを使用して、Firebase Test Labで実機テストを行う方法を紹介します。
  具体的には、プルリクエストをトリガーにGithub Actionsのworkflowが起動し、Firebase Test
  Lab上でRoboテストを、自動で走らせる方法を紹介します。
thumbnail: /uploads/images/post-1.jpg
date: 2020.05.24
categories:
  - Android
  - Github Actions
  - Firebase
tags:
  - Firebase Test Lab
  - ""
---
# 概要
本記事ではGithub Actionsを使用して、Firebase Test Labで実機テストを行う方法を紹介します。
具体的には、プルリクエストをトリガーにGithub Actionsのworkflowが起動し、Firebase Test Lab上でRoboテストを、**自動で走らせる方法**を紹介します。

# はじめに
Androidの実機を用いたテストはとても骨が折れるといわれています。
その理由の一つとして、端末の多さがあげられます。(参考: [Android端末一覧（Wikipedia）](https://ja.wikipedia.org/wiki/Android%E7%AB%AF%E6%9C%AB%E4%B8%80%E8%A6%A7))
端末数が多いと、ハードウェアのスペック、画面サイズ、OSのバージョンなどが多様化し、それぞれに対して実機テストをしなければなりません。


この問題を解決する方法の一つに、下記のようなクラウド型モバイルアプリテストサービスが存在します。

- [Firebase Test Lab](https://firebase.google.com/docs/test-lab?hl=ja)
- [AWS Device Farm](https://aws.amazon.com/jp/device-farm/)
- [Visual Studio App Center](https://azure.microsoft.com/ja-jp/services/app-center/)

このようなサービスを用いると、端末を手元に持たずにクラウド上で実機テストが可能になります。
つまり「このAPKを、Nexus6とGoogle Pixel 3の端末で、実機テストおねがいー」というようなことができるようになります。

しかしながら、いちいちAPKを作成して、それを手動でクラウドサービスに登録するのは面倒くさいですよね？
例えば「検証ブランチであるdevelopブランチに変更が加えられたら、それをいちいちビルドしてAPKを作成して、クラウドサービスに登録してテストをする」というような手間がかかります。


この問題を解決してくれるのが、**CI/CD**と呼ばれるものです。
**CI**とはContinuous Integration(継続的インテグレーション)の略であり、テストやビルドを自動で行い、開発効率を上げる手法のことを言います。
**CD**とはContinuous DeliveryあるいはContinuous deployment(継続的デリバリーあるいは継続的デプロイ)の略であり、コードを自動デプロイする手法のことを言います。
より正確な説明は[Continuous integration(Wikipedia)](https://en.wikipedia.org/wiki/Continuous_integration), [Continuous delivery(Wikipedia)](https://en.wikipedia.org/wiki/Continuous_delivery)を参考にしてください。


このCI/CDを使用すると、手作業で行なっていた実機テストまでのフローを自動化することができます。
つまり、先の例でいうと「developブランチの変更のコードを検証→ビルドしてAPKを作成→クラウドサービスに登録して実機テスト」を自動化することができます。

したがって、CI/CDツールを利用して、クラウド型モバイルアプリテストサービスを使用すれば、Androidの実機テストを効率的に行えることがわかります。

前置きが長くなりましたが、上述の内容を背景として、
**「Github Actionsと呼ばれるCI/CDツールを用いて、自動でFirebase Test Lab上で実機テストを実施する方法」**を紹介します。

CI/CDツールとしてGithub Actionsを使用した理由は、仕事先で開発しているアプリにおいて、Github ActionsをCI/CDとして用いていることと、個人的にGithub Actionsを触ったことがなかったからです。

クラウド型モバイルアプリテストサービスとしてFirebase Test Labを使用した理由は、仕事先で開発しているアプリにおいて、Firebaseサービスを利用しており、AWSなどの他のサービスを新たに使用するにはコストがかかると思ったからです。

# Github Actionsとは？
GitHub Actionsとは、[公式サイト](https://help.github.com/en/actions/getting-started-with-github-actions/about-github-actions)によると下記のように説明されています。
> GitHub Actions help you automate your software development workflows in the same place you store code and collaborate on pull requests and issues. You can write individual tasks, called actions, and combine them to create a custom workflow. Workflows are custom automated processes that you can set up in your repository to build, test, package, release, or deploy any code project on GitHub.

つまり、Github Actionsは、Github上で「Action」と呼ばれるタスクを組み合わせて「Workflow」とし、それを実行できるCI/CDサービスです。

例えば、Github上でプルリクエストがあったら[checkout](https://github.com/actions/checkout)と呼ばれるActionを用いて、指定したリポジトリからソースコードをチェックアウトし、[setup-java](https://github.com/actions/setup-java)というActionを用いて、Javaの環境を構築して、Ktlintと呼ばれるリントタスク実行するWorkflowを実行するといったことが可能になります。

Actionは、[マーケットプレイス](https://github.com/marketplace)で公開されており、用途にあわせて入手することが可能です。

# Firebase Test Labとは？
Firebase Test Labとは[公式サイト](https://firebase.google.com/docs/test-lab)によると、下記のように説明されています。
> Firebase Test Lab is a cloud-based app-testing infrastructure. With one operation, you can test your Android or iOS app across a wide variety of devices and device configurations, and see the results—including logs, videos, and screenshots—in the Firebase console.

冒頭でも説明した通り、Firebase Test Labとはクラウド型のアプリテスト基盤のことであり、色々なデバイスをまとめてテストすることができます。それに加えて、Firebase console上で、ログ、テストの様子を写した動画、スクリーンショットなどのテスト結果を確認することができます。

また、[公式サイト](https://firebase.google.com/docs/test-lab/android/firebase-console#run_a_test)によると、Androidをテストする際、Firebase Test Labにはテスト手法が、以下のように3つあります。

- [Instrumentテスト](https://firebase.google.com/docs/test-lab/android/instrumentation-test)
- [Roboテスト](https://firebase.google.com/docs/test-lab/android/robo-ux-test)
- [Game loopテスト](https://firebase.google.com/docs/test-lab/game-loop)

本記事では、Roboテストを使用してテストをしていますが、その他のテストについても簡単に説明していきます。

## Instrumentテスト
Instrumentテストは[公式サイト](https://firebase.google.com/docs/test-lab/android/instrumentation-test)によると下記のように説明されています。
> An instrumentation test is a test written by you or your team to specifically to test your app, using the Espresso and UI Automator 2.0 Android test frameworks. Test Lab provides results for all test cases that complete execution during that time.

つまり、Instrumentテストとは、Espresso とUI Automator 2.0 と呼ばれる、Androidテストフレームワークを使ってテストをすることができます。

上記のテストフレームワークは、コードを書くことで、指定したアクションでアプリをテストすることができます。

例えば、ユーザー登録画面で、パスワードの文字数が足りなかった場合、正しくバリデーションされ、エラーメッセージが出ているかといったテストが、コードを書くことによって可能になります。



## Roboテスト
Roboテストとは、[公式サイト](https://firebase.google.com/docs/test-lab/android/robo-ux-test)によると、下記のように説明されています。

> Robo test analyzes the structure of your app's UI and then explores it methodically, automatically simulating user activities. 

Roboテストとは、アプリのUIの構造を分析をしてから、ユーザーのアクティビティを自動的にシミュレーションすることができます。

例えば、アプリがボトムナビゲーションバーを実装しているとき、いわゆるクローラのようなものが、すべてのナビゲーションを探索して、自動でテストをしてくれます。

## Game loopテスト
Game loopテストとは[公式サイト](https://firebase.google.com/docs/test-lab/game-loop)によると、下記のように説明されています。

> With Game Loop tests, you can write tests native to your game engine and then run them in Test Lab on devices you choose. This way, you don't need to worry about writing for different UI or testing frameworks. A Game Loop test simulates the actions of a real player, and when you run it on Test Lab, it provides a fast and scalable way to verify that your game performs well for your users.

つまり、ゲームエンジンを使用したアプリにおいて、ゲームプレーヤーの操作をシミュレーションしたテストを実行できます。

例えば、Unityを使用したアプリにおいて、プレーヤーの操作をまとめたシナリオを作成し、テストをすることができます。

# 手順
次に、本記事のメインである「プルリクエストをトリガーにGithub Actionsのworkflowが起動し、Firebase Test Lab上でRoboテストを、自動で走らせる方法」について説明していきます。

## Firebaseプロジェクトを作成
Googleアカウントを作成し[Firebase Console](https://console.firebase.google.com)にアクセスします。
プロジェクトを作成するため、指示に従い情報を入力していきます。
プロジェクトが作成できると、下記の画像のようなページが表示されます。

## サービスアカウントキーを取得

## Github Actionsのworkflowを作成する
# 結果
# まとめ
