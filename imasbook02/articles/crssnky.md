# im@sparql応用 〜UE4編〜
<p class="right">著:croMisa</p>

<!-- 定番にしていけ☆ -->
<center><big><big><big>im@sparql</big></big></big></center>
<center><big><big>im@s + sparql = im@sparql</big></big></center>
<center>広がるアイマスワールドをオープンデータ化</center>
<center>WebやアプリからSPARQLで検索・利用可能なエンドポイント</center>

## はじめに
　im@sparqlは、現在も広がるアイマスワールドをデータベースという形で皆様のプロデュースの援助をしています。つまり、どのよなアイドルがどのようなプロフィールなのか、どのユニットに所属しているのか、着用した衣装は何か、などの情報が集められ、資源化されています。そして、それらはLinked Open Data(LOD)の形を取っています。そのため誰でもデータベースへアクセスすることができます。しかし、そのままでは使えません。「SPARQL」というクエリ言語を通じてアクセスする必要があります。  
　前回<!-- この表現はOK? -->、im@sparqlとは何か、SPARQLでどうアクセスするのかの入門部分をお届けしました。もし、前回をご覧になれる状況では無い場合は<!-- この表現はOK? -->、im@sparql.doc(\*1)をご参照ください。  
　今回は、実際にクエリを用いて何かを表現していこうと思います。そして、表現のキャンバスとして利用するのはUnreal Engine 4(\*2)です。UE4は、無償利用が可能(製品を販売して利益が出ればロイヤリティを払う)かつ、オープンソースの大きなC++ソフトウェアであり、C++の教材として利用することも推奨しています。そんなUE4に、im@sparqlを手軽に扱えるプラグインの製作を通じて、im@sparqlの利用の一例を紹介していきます。  
  
  
  
<!-- 改ページ -->
<footer>\*1：https://doc.crssnky.xyz/imasparql/</footer>
<footer>\*2：https://unrealengine.com</footer>

## 環境準備
　まずは開発環境を整えます。と、言ってもUE4を導入するだけですが。GitHubのprivateなリポジトリなので、公式のちょっとした手順(\*3)が必要なことに注意してください。  
  
　開発環境が整ったら、まずはUE4でC++を扱う方法をサラッと把握しましょう。「プログラマ向けクイックスタート」(\*4)を参照すると良いと思います。  
  
　プロジェクトやクラスの作り方を把握したところで、次に必要なライブラリを導入します。im@sparqlはデフォルトで、JSONでクエリ結果を返します。ですのでUE4、もといC++でJSONが手軽に扱えるようライブラリを2つ導入します。
- cereal(https://github.com/USCiLab/cereal)
- cereal-UE4(https://github.com/usagi/cereal-UE4)

　導入は、cereal-UE4のREADME.mdまたは、cereal-UE4作成者の伊藤兎さんのブログ(\*5)を参照ください。  
　・・・  
<center>それではみなさん、ごじゅんび～？(\*6)</center>

<footer>\*3：https://www.unrealengine.com/ja/ue4-on-github</footer>
<footer>\*4：https://docs.unrealengine.com/en-US/Programming/QuickStart</footer>
<footer>\*5：https://usagi.hatenablog.jp/entry/2018/03/30/043613</footer>
<footer>\*6：315プロNight! F-LAGS担当期の「お助けラブリー・キューピッズ」コーナーの迷台詞</footer>

## 構造体を定義する
　cerealでは、JSONの受け皿に構造体を使います。構造体を定義していきましょう。  
　まずはファイルの作成です。以下の場所に任意の名前でヘッダーファイルを作成してください。
```
<MyProjectDirectory>
|-Source
|  |-<MyProjectName>
|  | |-<<<任意の名前>>>.h
|  |-<MyProjectName>.Target.cs
|  |...
|-<MyProjectName>.uproject
|...
```
　実は`<MyProjectDirectory>/Source/<MyProjectName>`の下であれば好きにディレクトリを分けても良いので、お好みに合わせて整理しておいても大丈夫です。  
　ファイルを作成したら、このディレクトリ状態を教えてあげないといけません。`<MyProjectDirectory>`にある、<MyProjectName>.uprojectを右クリックして`Generate <任意のIDE> project files`を実行して、更新しましょう。  
  
　ようやくコードが書ける状態になりました。お好きなエディタでヘッダーファイルを開いてください。
```C++
USTRUCT(BlueprintType)
struct FimasparqlResultItem{
	GENERATED_BODY()
		UPROPERTY(BlueprintReadWrite, Category = "imasparql")
		FString type;
	UPROPERTY(BlueprintReadWrite, Category = "imasparql")
		FString datatype;
	UPROPERTY(BlueprintReadWrite, Category = "imasparql")
		FString xml_lang;
	UPROPERTY(BlueprintReadWrite, Category = "imasparql")
		FString value;
};
```
　1行目から見慣れないマクロですね。`USTRUCT`はUE4に、構造体であることを