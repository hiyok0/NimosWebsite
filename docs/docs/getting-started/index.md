---
title: 始める
---
# 初めに
この章では、Nimosのセットアップ方法を説明します。  
もし、改善の提案がある場合はhiyokoまでお知らせください。参考にしたり取り込んだりします。

::: warning CAUTION
　macOSのみリリースしているため、macOSを前提に説明しています。独自ビルド等でその他の環境で実行している場合には適宜読み替えてください。
:::

## TL;DR for experts
　 
1. わんコメとVOICEVOXは既に利用可能になっているものとします。VOICEVOXをこれのためだけに準備する場合、[VOICEVOX ENGINE](https://github.com/VOICEVOX/voicevox_engine)と音声モデルがあれば大丈夫です。
2. 標準入力から再生できる実行ファイルをダウンロード（必要に応じてインストール）してください。
	1. 	例
		* 	[mpv](https://mpv.io/)
		*  	[FFplay(FFmpeg)](https://ffmpeg.org/)
		*   [VLC(cvlc)](https://www.videolan.org/)
		*   もちろん、お好みのパッケージマネージャ等でインストールしたものを使うこともできます。
		*   初期設定のコマンドはHomeBrewでmpvをインストールした状態のものです。
3. Nimosをダウンロード（必要に応じてインストール）する。
	1. GitHubの[Releases](https://github.com/hiyok0/Nimos/releases)から最新版をダウンロードし起動。
	2. 設定を開き必要事項を設定します。
		* 注意： パスが通っていないため、コマンドは絶対パスで指定してください。
	3.  インストールせずとも起動可能であれば利用可能です。

## 事前準備
### 連携するものたちの用意
　このアプリは、２つ（再生に用いるものを含めると３つ）のアプリを連携させることを前提に作られています。そのため、単体では（起動はしますが）何にも使えません。ここでは、開発動機にもなったわんコメとVOICEVOXの連携を前提に説明します。また、既に最新版がインストールされているものは飛ばして大丈夫です。

#### わんコメの用意
　[わんコメの公式サイト](https://onecomme.com/)に行きダウンロードし、インストールします。ここまででつまずいた場合は[ドキュメント](https://onecomme.notion.site/onecomme/d04d95b33a03419c8924dad00f550006)を確認し、その上で解決しなければ[わんコメのフォーラム](https://forum.onecomme.com/)で質問してみましょう。私も回答しています。

#### VOICEVOXの用意
　[VOICEVOX公式サイト](https://voicevox.hiroshiba.jp/)に行きダウンロードしましょう。細かい使い方やトラブルシューティングは他サイトに任せます。
　ちなみに、本当にこれにしか使わない場合は[VOICEVOX ENGINE](https://github.com/VOICEVOX/voicevox_engine)と音声モデルのみで使うことができます。詳しくは[VOICEVOXの全体構成](https://github.com/VOICEVOX/voicevox/blob/main/docs/%E5%85%A8%E4%BD%93%E6%A7%8B%E6%88%90.md)をご覧ください。

#### 標準入力から再生できる実行ファイル
将来的にこのようなことをしなくても実行できる方法を考え中ですが、その場合であってもこれらのソフトを使うと楽に様々な設定ができますのでおすすめです。
##### 「標準入力から再生できる実行ファイル」とは
　macOSにプリインストールされているコマンド・アプリの中でこれができるものが見当たらなかったためインストールを求めています。後述のffplay等ライセンス的に同梱も不可能ではないはずですが、~~[恥の大広間](https://www.ffmpeg.org/shame.html)に載ったら恥ずかしいので~~ライセンスって地味に難しいのでちゃんと確認し、必要なライセンス表記に確信を持てるまでは同梱しません。

##### 「標準入力から再生できる実行ファイル」の例  
  * [mpv](https://mpv.io/)（使いやすい、おすすめ）
  * [FFplay](https://ffmpeg.org/)(できる……はず)
  * [VLC](https://www.videolan.org/)（できるはず（まだ未確認））
 
 　ここではmpvで解説します。
 　
##### mpvの入手
 
![mpv ioのinstallationのページ](/assets/getting-started/mpv-io-Installation.png)
1.  [mpv.ioのinstallationのページ](https://mpv.io/installation/)にアクセスし、`macOS builds by stolendata`のリンクをクリックします。
2. `mpv-latest.tar.gz`をダウンロード
 ![mpvのビルドのダウンロードページ](/assets/getting-started/mpvsdlpage.png)
3.ダウンロードしたtar.gzファイルを解凍（展開）すると、アプリケーション本体とmpvのドキュメントが入っています。  
![mpv-latest-tar-gz.png](/assets/getting-started/mpv-latest-tar-gz-extracted.png) 
4. mpv本体をアプリケーションフォルダ(/Application)にコピーします（推奨。しなくても問題ない。）
5. mpv.appを副クリックします。
![mpv.appのコンテクストメニュー](/assets/getting-started/mpv-app-contextmenu.png)
6. `パッケージの内容を表示`を選択
7. 中にあるmpvというUnix実行ファイルなるものを確認します。これがどこにあるか、というのをこの後使います。
![mpv.appの中を確認する](/assets/getting-started/mpv-hiraku.gif)

## Nimosのダウンロードと設定
1. [NimosのReleasesのページ](https://github.com/hiyok0/Nimos/releases)に行きます。
2. 一番上にある（最新の）Nimos …… .zipという名前のファイルをダウンロードします。（次回以降はわかりやすいようにNimos+バージョン番号.zipにする予定です。）
![mpv.appの中を確認する](/assets/getting-started/Nimos-Releases-Assets.png)
3. ダウンロードしたzipファイルを解凍します。
4. 出てきたNimosを必要に応じて移動します。
:::tip 移動について
そのままでも使えますが、/Applicationや~/Applicationに移動することでインストールできます。
:::
5. 副クリックで開くを選択し、起動します。
![mpv.appの中を確認する](/assets/getting-started/open-nimos.png)
6. 順番にこの様な警告が出ますが順番にクリックしていきます。ソースは公開しているので、もし不安な場合は[GitHub](https://github.com/hiyok0/Nimos/)で確認できます。
![不明なアプリを開く警告](/assets/getting-started/systemwarn-open.png)
![不明なアプリを起動する警告](/assets/getting-started/systemwarn-install.png)
![不明なアプリを起動する警告](/assets/getting-started/systemwarn-firewall.png)
7. 起動したら、Settingsを押して設定画面へ行きます。
![Settingsをクリック](/assets/getting-started/nimos-click-settings.png)
8. 再生コマンドを設定します
![再生コマンドを設定](/assets/getting-started/nimos-set-playcommand.png)
	* コマンドは`<先程のmpvのパス> -`です。
	* `-`の前にスペースがあります。半角英数字です。
9. 保存を押します。
![設定を保存](/assets/getting-started/nimos-settings-save.png)
10. 完了です。
![設定完了](/assets/getting-started/nimos-applied.png)

## わんコメ側の設定
Nimosはわんコメには棒読みちゃんとして設定します。  
![連携メニューを開く](/assets/getting-started/onecomme-menu-renkei.png)
![連携メニュー](/assets/getting-started/onecomme-renkei.png)
ポート番号はNimosのトップ画面のものと一致させてください。
![連携メニュー](/assets/getting-started/nimos-portnumber-display.png)
Nimos側のポート番号を変えることもできます（Nimosの再起動が必要です）。
:::warning メモ
詳しい変更方法は後で書く
:::
![ポート番号が変更になる表示](/assets/getting-started/nimos-port-change-display.png)
  
参考：[わんコメ公開ドキュメント「棒読みちゃん連携」](https://onecomme.notion.site/8ba47be790a8411fb293832f222cfd0b)
