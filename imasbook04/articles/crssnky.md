# UE4でアイマス楽曲をさらに盛り上げてけ☆
<p class="right">著:croMisa</p>

## はじめに
Unreal Engine 4(UE4)は、Epic Gameが開発する商用ゲームエンジンです。モバイル向けのゲームのほとんどはUnity製ですが、大規模タイトルでは国内でも採用されています。アイマスと関わりの深い(\*1)エースコンバットシリーズの最新作でも採用されています。最近はゲームエンジンを、3DCG表示ソフトウェアの統合開発環境として使用することが増えています。UE4ではそのような非ゲーム向け用途を「エンタープライズ用途」と名付け、様々な機能を盛り込んでいます。

今回は、UE4を使ってゲームではなく、アイマス楽曲を盛り上げるためのソフトウェアの簡単な例を作成します。この例を発展させることで将来的には、VJ(Visual Jocker)で使用できるような映像表現を獲得できるでしょう。

<footer>\*1：https://idolmaster.jp/blog/?p=10945 など</footer>

## ゴール
完成イメージはこちら。グレースケール画像のため、色感は調整されています。
<center>![](./images/crssnky/01_invS.png)<br/>
図1 完成イメージ</center>

BGMをスペクトル解析しそれを円形に配置されたBoxを伸ばすことで、オーディオスペクトラムを表現しています。また、BPMに合わせて、中央から△を外側へ放出しています。キャプチャした映像は@croMisaの固定ツイートになっています。(\*2)

完成品はGitHubにあります(\*3)。  

<footer>\*2：https://twitter.com/croMisa/status/1188376656718651392</footer>
<footer>\*3：https://github.com/crssnky/UE4_SoundEffect</footer>

## 開発環境
必要なもの
- Unreal Engine 4  
今回は、バージョン4.23.1で説明します。
- Visual Studio 2017/2019 or Xcode  
ビルドしなければ、たぶん無くても良い。たぶん。  
- ローリング△さんかく(WAV形式)  
△・□・○と、プリミティブな形がいっぱい出てくるので。  
その他の楽曲でも構いません。

## 作成
### Spectre Visualizer① ～BGMを反映～

### Position based colors ～位置と色相で良い感じの色～

### Niagara① ～ローリング△さんかく～

### Spectre Visualizer② ～BPMを反映～

### Niagara② ～もうちょっとカドを少なく～

### Spectre Visualizer③ ～歌詞を反映～

## おわりに

## 参考
