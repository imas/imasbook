# プレイリストを自動生成
<p class="right">著:Wakuwaku</p>

## はじめに

### 対象者

- アイマスの曲が多すぎて困っている方
- Synology社のNASを購入する予定・持っている方

### このChapterを読むにあたっての注意点
- Synology社のNASを持っている必要があります

## 問題

現在僕が管理している音楽トラックはアイドルマスターのみで(ラジオCD・ドラマCD・カバー・BGMを含み)6000を超えている。
これほどたくさんあったら聴く曲の偏りが発生するだろう。

僕の場合音楽を聴くときよくあるパターンとして以下の4つある。

- 新しくリリースされたCD
- いつものプレイリスト
- 10th LIVE プレイリスト
- Re:ステージ!全曲シャッフル

これでは多くても100曲程度になってしまう。

NASでどこでもライブラリ内の曲すべてを聴くことができる環境を構築したというのにもったいない。

## 解決方法

何かしらの規則でプレイリストを作成すれば，1年間でより多くの曲を聴けるのではないか。

アイドルの誕生日を使えば祝いながら楽しくアイマスの世界に浸れるかもしれない。

## 実装

### 今回使うもの

- im@sparql
- Synology DS918+
  - Audio Station
  - Docker
  - Node-RED

### NASにDockerをインストール

#### 1. DSMにログインしてパッケージセンターを起動する



#### 2. `Docker`で検索

![docker install 1](./images/wakuwaku/docker-install-1.png)

#### 3. Docker をインストール

![docker install 2](./images/wakuwaku/docker-install-2.png)

`インストール`をクリックしたら自分の環境に合わせてインストール先の設定を求められる場合がある。

### Node-REDの準備

#### 1. Docker Image 「nodered/node-red-docker」のダウンロード

- レジストリを開いて`node-red`で検索。
- nodered/node-red-dockerをダウンロード。

![node-red setup 1](./images/wakuwaku/node-red-setup-1.png)

#### 2. Docker Container を立ち上げる

- イメージを開いて`nodered/node-red-docker:latest`をクリック。
- 起動ボタンを押す。
- ウィンドウが開くので詳細設定を押す。

![node-red setup 2](./images/wakuwaku/node-red-setup-2.png)

- コンテナと通信するためのポート設定をする。ここではNode-REDと同じ`1880`に設定する
- 設定したポート番号でNode-REDにアクセスできる。
- 設定したら`適用`をクリックし，詳細設定ウィンドウを閉じる。

![node-red setup 3](./images/wakuwaku/node-red-setup-3.png)

- コンテナ作成ウィンドウに戻り，`次へ`をクリックする。
- ポート設定が正しくできているかチェックする。
- 適用をクリックして，コンテナを起動する。

![node-red setup 4](./images/wakuwaku/node-red-setup-4.png)

- コンテナを開き，node-redのコンテナが立ち上がっているか確認する。

![node-red setup 5](./images/wakuwaku/node-red-setup-5.png)

#### 3. Node-RED接続確認

### 誕生日のアイドルを取得する

### NASに保存してある曲を取得する

### NASにプレイリストを登録する

### Slackに通知をする

## 終わりに
