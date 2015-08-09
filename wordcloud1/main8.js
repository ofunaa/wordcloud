//連想配列で解決
//流れ
//word配列をループ
//連想相列内の重複チェック
//○の場合、連想配列に加える
//×の場合、valueを++

//開始
(function(){
	//情報取得
	var words = document.body.textContent;
	//分解して配列化
	var word = words.split(" ");
	//連想配列を作成
	var counts = {};
	//word配列をループ
	for (var i = 0; i < word.length; i++) {
		//ループされている単語を取得
		var wordone = word[i];
		//thewordone = "'" + wordone+ "'";
		//キーの存在をチェック
		if (counts[wordone] === undefined) {
			counts[wordone] =  0;
		}
		counts[wordone]++;	
	}
	//console.log(counts);
	//counts配列をループ
	for (key in counts) {
		//フォントサイズの初期値を設定
		var fs = 12;
			fs = fs + counts[key];
		//font-size付与
		document.write('<span style="font-size : ' + fs + 'px">'+ key + '</span> ');
	}
//終了
})();
