# 小鳥さんと一緒に100%Kotlinのサイト製作<br><span class="subtitle">〜Frontend編〜</span>
<p class="right">著:にしこりさぶろ〜</p>

## プロローグ -765プロの年末-

#### プロデューサー
 おはようございますー！お、律子！今日も早いな。

#### 律子
 おはようございます、プロデューサー。早いもなにも、年末年始の芸能事務所に閑古鳥が鳴いていたらそれこそ一大事ですよ。今日もこれからアポが3件と、夜はレッスンですし。

#### プロデューサー
 お疲れさま。僕の予定もぎっしりで……、そうだ！この前導入したGoogle Calendar、使い心地はどうだ？

#### 律子
 なかなか良い感じね！手帳で管理していた時は、あっという間に余白が埋まっちゃって大変でしたから。プロデューサーや社長の予定をいつでも確認できるのも、すごく良いわ！

#### プロデューサー
 おおっ、良かったー！入社してすぐ、全員分の予定を三日三晩コピペした甲斐があったよ！

#### 律子
 スケジュール管理に手帳を使わないなんて、最初は信じられなかったけど、最先端のツールはやっぱり使いこなさないとですね！それじゃ、そろそろ時間なので。

#### プロデューサー
 いってらっしゃい！外寒いから、気をつけてなー！
 ……さて、僕も仕事始めるか……？えっと……、音無、さん？

#### 小鳥
 ……は゛い゛、おはよう、ございます……。

#### プロデューサー
 机に突っ伏して、大丈夫ですか？どこか体調、悪かったりしますか？

#### 小鳥
 いえ、実は……社長から頼まれた、大人メンバーでの忘年会が……。

#### プロデューサー
 あぁ、そういえば。年末ですし、そろそろお店埋まっちゃいますね。
<br/>
<br/>
![図1. 予定いっぱいのGoogle Calendar](./images/subroh0508/googlecalendar.png)
<center>図1. 予定いっぱいのGoogle Calendar</center><br/>

#### 小鳥
 そうなんです。でも、予定が、予定がみっちり詰まったこのGoogle Calendarから、全員の都合が合う日を探すのが、もう大変で大変で……。

#### プロデューサー
 なるほど……。音無さん、ほぼ毎日僕達のスケジュールチェックしてますもんね……。

#### 小鳥
 そうなんです！大変なんです！だからプロデューサーさん、これ、自動化できないですか！？できれば、PCからもスマートフォンからも確認できるWebアプリで！

#### プロデューサー
 えっ！？ま、まぁ「Google Calendarから予定を取って、空いた時間を探す」だけなら、そんなに難しくはないですけど……。でも僕も年末は、外回りや収録・取材の付き添いでまとまった時間は取れないんですよ……。

 それから小鳥さん、WebアプリだとJavascriptの知識が必要ですよ？今から新しく言語を覚えるんじゃ、とても年末には間に合わ……

#### 小鳥
 プロデューサーさん、私、Kotlinなら書けます！！！
 前にプロデューサーさんに教えてもらってから、Kotlin Koans(\*1)もやって、Kotlin in Actions(\*2)も一通り読みました！それから、8月のKotlin Festも行ったんですけど、Kotlin/JSを使ってWebアプリを作った人のお話(\*3)聞きました！だから今の私なら、Webアプリも作れます！

#### プロデューサー
 す、すごい熱量ですね。ただ、Kotlin/JS、最初の環境構築が大変じゃないですか？

#### 小鳥
 そうなんです……。Kotlin/JS、触ってみたらなぜか「うぇぶぱっく」をたくさん書かないといけないみたいで。

<footer>\*1 https://play.kotlinlang.org/koans/overview</footer>
<footer>\*2 https://www.amazon.co.jp/dp/4839961743</footer>
<footer>\*3 https://speakerdeck.com/subroh0508/jsdezuo-tutagui-ji</footer>

#### 小鳥
 だからプロデューサーさん、無理を承知でお願いします！Kotlin/JSの環境構築、やってもらえないでしょうか！？

#### プロデューサー
 (さらっと1番大変なところをお願いしてきた……)

 うーん、そうですね……。確かにビルド環境の整備だけなら、ギリギリ時間取れるかも？その後はほとんど手助けできないと思いますが、それでも大丈夫ですか？

#### 小鳥
 ……！ありがとうございます！！！私、頑張ります！！！
  
 環境構築、できたらGitHubにpushしてもらえると嬉しいです！後で私の方でforkして、機能を作っていきますから！

#### プロデューサー
 は、はい！了解です……！

 (音無さん、もうGitHubまで使いこなせるのか……)

## §1 Kotlin/JSでDOM操作

 プロデューサーさん、早い！もうコード(\*4)が上がってます！Firebase Functions経由でGoogle Calendarから予定を取ってくるAPIまで実装済みです！時間がないと言いながら、流石です。
 
 それじゃあ早速、cloneしてローカルで動作確認してみましょう！development環境での実行コマンドを叩きます！(\*5)

```
$ yarn run build # index.htmlの生成に必要
$ yarn run dev
```

 さて、このまま`localhost:8080`にアクセスすれば……。完璧です！「Hello, World!」、ちゃんと出力されてます！

<footer>\*4 https://github.com/subroh0508/imasbook04-sample</footer>
<footer>\*5 commit hash: d892d91b8cc7ac50e6fe4b6c477ea20903fc4bdd</footer>

![図2. Kotlin/JSでHello,World!](./images/subroh0508/helloworld.png)
<center>図2. Kotlin/JSでHello,World!</center><br/>

 まずは`index.template.html`を編集してUIを作ります！必要なのは、
 
- プロデューサーさん、律子さん、社長のカレンダーのうち、どれを見に行くか選ぶためのチェックボックス
- 日付と、空いているか調べたい時間帯を入力するテキストボックス
- Firebase Functionsにリクエストを送る送信ボタン
- 入力値をリセットするリセットボタン


 この4つです。ささっと実装しちゃいます！今回はとにかく完成を急ぎたいので、CSSは一切使わず進めますよ。

 書けたらもう一度、`yarn run build`と`yarn run dev`を実行です。どうでしょう……。うん、良い感じですね！(\*6)

<br/>

![図3. 実装したUI](./images/subroh0508/ui.png)
<center>図3. 実装したUI</center><br/>

<footer>\*6 commit hash: c735dce6d277524128cf0d4076ac61228f2b04dd</footer>

 UIが用意できたところで、リセットボタンのクリック動作を実装します。Kotlin/JSでのDOM要素の取得は、Javascriptとほぼ同じように書くことができるんですよ。

 例えば、`name`属性が`'reset'`の要素を取得したい場合は、こんな感じのコードになります。

```
val resetButton: Node? = document.getElementsByName("reset")[0]
```

 因みに、チェックボックスやテキストボックスのようなDOM要素から値を取りたい、そんな時は`HTMLInputElement`への型キャストが必要になりますよ。覚えておいてくださいね！

```
val day: HTMLInputElement? =
    document.getElementsByName("day")[0] as? HTMLInputElement?
```

 DOM要素の取得の仕方が分かったところで、値のリセットの関数を書いていきます。

```
val producer: HTMLInputElement?
    get() = document.getElementsByName("producer")[0] as? HTMLInputElement
val ritsuko: HTMLInputElement?
    get() = document.getElementsByName("ritsuko")[0] as? HTMLInputElement
val junjirou: HTMLInputElement?
    get() = document.getElementsByName("junjirou")[0] as? HTMLInputElement
val day: HTMLInputElement?
    get() = document.getElementsByName("day")[0] as? HTMLInputElement
val minHour: HTMLInputElement?
    get() = document.getElementsByName("minHour")[0] as? HTMLInputElement
val minMinute: HTMLInputElement?
    get() = document.getElementsByName("minMinute")[0] as? HTMLInputElement
val maxHour: HTMLInputElement?
    get() = document.getElementsByName("maxHour")[0] as? HTMLInputElement
val maxMinute: HTMLInputElement?
    get() = document.getElementsByName("maxMinute")[0] as? HTMLInputElement

fun reset(
        checked: Boolean = false,
        dayValue: String = "1",
        minHourValue: String = "12",
        minMinuteValue: String = "0",
        maxHourValue: String = "13",
        maxMinuteValue: String = "0"
) {
    producer?.checked = checked
    ritsuko?.checked = checked
    junjirou?.checked = checked
    day?.value = dayValue
    minHour?.value = minHourValue
    minMinute?.value = minMinuteValue
    maxHour?.value = maxHourValue
    maxMinute?.value = maxMinuteValue
}
```

 また新しい文法がでてきましたね。`get() = document.get...`となっているこの書き方、**カスタムゲッター**と言います。

  `get() = ...`/`set(value) { ... }`と書くことで、Kotlinのプロパティ(=Javaで言うフィールド変数)はカスタムのゲッターとセッターを定義することができます(\*7)。カスタムゲッターを使うことで、プロパティにアクセスする度にゲッター内の処理が実行され、まるで関数のように扱うことができるんですよ！

 そして最後に、リセットボタンにクリックイベントに対するコールバックを実装(\*8)します。これもJavascriptの時とほぼ一緒、です！

```
resetButton?.addEventListener("click", { event: Event? ->
    reset()
})
```

 それじゃあ、リセットボタンを押してみましょう。全てのチェックボックスのチェックが外れて、日付が「1」に、時間帯が「12時00分から13時00分」に変わりましたよ！これでもう、DOM操作は完璧です。順調ですね！

## §2 Firebase Functionsへのリクエスト

## §3 空き時間を探すロジックの実装

<footer>\*7 https://kotlinlang.org/docs/reference/properties.html#getters-and-setters</footer>
<footer>\*8 commit hash: 09ddbc7169e6a692324de928fcd59df2602067a2</footer>
