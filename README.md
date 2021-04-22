# routine_app
###### tags: `個人開発`
ハッカソンで作成した週間記録アプリ

## アプリの目的
* 自分の続けたい習慣をメモする--->記録することで可視化してモチベーションを保つ


## 機能

### 実装済み
*   続けたい習慣を登録
*   習慣を削除
*   今日やった習慣を記録する
*   レーダーチャートでステータス表示
*   ただ記録するだけでなく,その行動によってステータスを上げる(ドラクエ方式)
### これから実装したい機能

*   カレンダー機能
*   認証->個人ごとにステータスを設定する
*   github的な草を生やす機能
*   ステータスに応じてレベルアップ






#### メモ
レーダチャートで表示
recharts.jsを使用

http://recharts.org/en-US/guide/customize
https://qiita.com/kazenomachi/items/439a7bdae917c5bf36cc
http://recharts.org/en-US/guide/customize

### データベース(firebase reatime database)
https://takashinoda.hatenablog.com/entry/2019/10/18/175126

## デプロイ


### ビルド
yarn build

### デプロイ
npx firebase deploy


firebase realtime database

### ホスティングを無効にしたいとき
firebase hosting:disable

### エミュレーター
firebase emulators:start 
 