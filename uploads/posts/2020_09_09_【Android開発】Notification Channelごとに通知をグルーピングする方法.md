---
title: 【Android開発】Notification Channelごとに通知をグルーピングする方法
summary: 'Androidのプッシュ通知をチャンネルごとにグループ化する方法を紹介します。'
thumbnail: "2020_08_30.png"
date: 2020.09.09
categories:
  - "Android"
tags:
  - "プッシュ通知"
  - "Notification Channel"
---

## 概要
下記動画のように、プッシュ通知をチャンネルごとにグループ化する方法を紹介します。

//TDOO:   動画

チャンネルごとに、プッシュ通知をグループ化して受信トレイに表示させたいという方には参考になると思います。

また、Githubにソースコードをあげているので、参考にしてみてください。

// TODO: Githubのカード的な

注意点としては、OS8以上でなければ通知チャンネルを使用することができないことと、OS7以上でなければ通知のグループ化を実装することができません。

## 実装方法
### チャンネルの作成
まず下記のようにチャンネルを作成するメソッドを作成します。
```kotlin
fun createChannel(context: Context) {
    NotificationManagerCompat.from(context).createNotificationChannels(
        ChannelItem.values().map {
            NotificationChannel(
                it.channelId,
                context.getString(it.getTextStringRes()),
                NotificationManager.IMPORTANCE_HIGH
            )
        }
    )
}
```
`NotificationManagerCompat.from(context).createNotificationChannels`において、アプリの通知チャンネルを作成しています。引数には`List<NotificationChannel>`型のインスタンスを指定しています。

`NotificationChannel`クラスはチャンネルの設定についてのクラスで、インスタンス化には、チャンネルのId、チャンネルの名前、Importanceを指定しています。Importanceとは、通知受信時に音を出すか、ヘッドアップ通知とするかなどの通知の重要度を指定することができます。詳しくは[Notification importance](https://developer.android.com/guide/topics/ui/notifiers/notifications#importance)を参考にしてください。


また、`ChannelItem.values().map`としているように、今回は複数チャンネルを作成するため、下記のようにチャンネルの情報をまとめた`ChannelItem`というEnumクラスを作成します。


```kotlin
enum class ChannelItem(val channelId: String) {
    CHANNEL_1("notification_channel_1"),
    CHANNEL_2("notification_channel_2"),
    CHANNEL_3("notification_channel_3");

    companion object {
        @JvmStatic
        fun value(channelId: String) : ChannelItem? {
            return try {
                values().first {it.channelId == channelId}
            } catch (_: NoSuchElementException) {
                null
            }
        }
    }

    fun getTextStringRes(): Int {
        return when(this) {
            CHANNEL_1 -> R.string.channel_name_notification_1
            CHANNEL_2 -> R.string.channel_name_notification_2
            CHANNEL_3 -> R.string.channel_name_notification_3
        }
    }
}
```

EnumクラスのプロパティにチャンネルのIdを持たせています。さらに、`getTextStringRes()`というメソッドでEnumクラスのインスタンスから、チャンネルの名前を取得できるようにしています。

上記の実装でチャンネルの作成ができます。

### プッシュ通知の作成
次に下記のように、実際にプッシュ通知を作成するメソッドを作成します。

```kotlin
fun localPush(context: Context, item: PushMessageItem) {

    val channelItem = ChannelItem.value(item.channelId) ?: return
    
    val builderChild = NotificationCompat.Builder(context, item.channelId)
        .setContentTitle(item.title)
        .setContentText(item.body)
        .setAutoCancel(true)
        .setDefaults(NotificationCompat.DEFAULT_SOUND)
        .setPriority(NotificationCompat.PRIORITY_HIGH)
        .setGroup(item.channelId)
        .setSmallIcon(R.drawable.ic_launcher_    
    
    val builderParent = NotificationCompat.Builder(context, item.channelId)
        .setPriority(NotificationCompat.PRIORITY_HIGH)
        .setGroup(item.channelId)
        .setSmallIcon(R.drawable.ic_launcher_foreground)
        .setStyle(
            NotificationCompat.InboxStyle()
                .setSummaryText(
                    context.getString(channelItem.getTextStringRes())
                ))
        .setGroupSummary(true)
        .setAutoC    
    
    NotificationManagerCompat.from(context).run {
        notify(System.currentTimeMillis().toInt(), builderChild.build())
        notify(channelItem.ordinal, builderParent.build())
    }
}
```



### まとめ