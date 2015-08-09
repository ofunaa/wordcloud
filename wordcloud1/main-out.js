//連想配列で解決
//流れ
//word配列をループ
//連想相列内の重複チェック
//○の場合、連想配列に加える
//×の場合、valueを++

//開始
$(function(){
	//情報取得
	var words = document.body.textContent;
	//分解して配列化
	var word = words.split(" ");
	//連想配列を作成
	var counts = new Object();
	//word配列をループ
	for (var i = 0; i < word.length; i++) {
		//ループされている単語を取得
		wordone = word[i];
		thewordone = "'" + wordone+ "'";
		console.log("kore  "+thewordone);
		//キーの存在をチェック
		if ("'" + wordone+ "'" in counts) {
			up = counts["'" + wordone+ "'"];
			up++;
			counts["'" + wordone+ "'"] = up;
			continue;
		}else{
			counts["'" + wordone+ "'"] = 1;
		}
	};
	//console.log(counts);
	//counts配列をループ
	for (key in counts) {
		//classを付与
		document.write('<p class="fs' + counts[key] + '">'+ key + '</p> ');
		//classにプロパティを付与
		var element = document.getElementsByClassName('"fs'+counts[key]+'"');
		console.log("element is "+element)
			//fsにフォントサイズを指定
			var fs = 12;
				fs = fs + counts[key];
			//classnameにfont-sizeを指定
			element.style.fontSize = '"'+ fs+'px"';
	}
//終了
});
