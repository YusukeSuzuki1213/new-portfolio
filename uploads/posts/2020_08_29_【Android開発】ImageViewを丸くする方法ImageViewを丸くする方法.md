---
title: 【Android開発】ImageViewを丸くする方法
summary: 'Androidで画像リソースを表示するImageViewを角丸にする方法を紹介します。'
thumbnail: "2020_08_30.png"
date: 2020.08.30
categories:
  - Android
tags:
  - ImageView
---

## 概要
Androidには、画像リソースを表示するために[ImageView](https://developer.android.com/reference/android/widget/ImageView)クラスが存在します。これを使用することで、画像を表示することが可能になります。しかしながら、下の画像のように**丸いアイコンのような画像を表示させる属性は、標準で存在しません**。(2020/08/29現在)

なので今回は、**ImageViewを角丸にする方法を紹介します**。サードパーティのライブラリも複数存在しますが、今回はそのよなライブラリに頼らずAndroid標準のライブラリのみ使用して実装する方法を紹介します。

<img width="1680" alt="画像" src="https://camo.qiitausercontent.com/f595e41fdac3174ce612bb6012bf2ef0fd2bf208/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3139393938382f65376166346232352d643931302d343438662d373662302d3637333635353231383238332e706e67">

## 実装方法
実装のコードは下記のようになります。
ポイントは[CardView](https://developer.android.com/reference/androidx/cardview/widget/CardView)を使用することです。
```xml
<androidx.cardview.widget.CardView
    android:id="@+id/icon"
    android:layout_width="40dp"
    android:layout_height="40dp"
    app:cardBackgroundColor="@color/colorAccent"
    app:cardCornerRadius="20dp"
    app:cardElevation="0dp"
    
    <ImageView
        android:id="@+id/image_view"
        android:layout_height="wrap_content"
        android:layout_width="wrap_content"
        android:src="@drawable/test_jpg"
        android:scaleType="centerCrop"
        android:layout_gravity="center"
        />
</androidx.cardview.widget.CardView>
```

ざっくり実装方針を説明すると、CardViewの子としてImageViewを配置し、CardViewで角丸を作成しています。

CardViewには、`app:cardCornerRadius`という属性が存在し、角の半径を指定することができます。この属性により角丸が実現できます。


## まとめ
今回はImageViewを角丸にする方法を紹介しました。
サードパーティのライブラリを使用しなくても、簡単に実装できますので、ぜひ使用してみてください！
