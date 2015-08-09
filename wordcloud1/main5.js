//マッチで検索

//開始
$(function(){
	//情報取得
	var words = document.body.textContent;
	//分解して配列化
	var word = words.split(" ");
	var word1 = word.split("(");
	console.log(word);
	//単語毎にループ
	for (var i = 0; i < word.length; i++) {
		//ループしている単語を取得
		var tango = word[i];
		//正規表現オブジェクト作成
		re = new RegExp(tango,"g");
		//マッチの回数取得
		var points = (words.match(re)||[]).length;
		console.log(tango+" is "+points)
		//classを付与
		document.write('<p class="fs' + points + '">'+ word[i] + '</p> ');
		//classにプロパティを付与
			//classnameにfont-sizeを指定
			// var element = document.getElementById(classname);
			// 	element.style.fontSize = fs;
			// 	element.style.color = "hsl(0, 100%, 50%)";

	//単語毎のループ終了
	};
//終了
});