$(function(){
	//boduからテキスト情報を持ってくる
	var words = document.body.textContent;
	//半角スペースで区切って配列にする
	var word = words.split(" ");
	//配列を一単語毎に繰り返す
	for (var i = 0; i < word.length; i++) {
		var tango = word[i];
		//単語の個数を数える
		var wordnumber = words.split(tango).length - 1;
		//wordのclassを設定
		var wordclass = 
		var wordcloud = '<p class="fs"'+ wordnumber + '>' + tango + '</p>';
		document.write(wordcloud);


			//並べ替えて、上から順にfsクラスを振っていく。
			for (var i = 1, fs = 12; i < wordnumber.length; i++; fs = fs+3;) {
				var classname = ".fs" + wordnumber[i];
				console.log(classname);

				//色まで変えれたら最高！
				// document.getElementById(classname).style.color="#"+"";

				//classnameにfont-sizeを指定
				var element = document.getElementById(classname);
				element.style.fontSize = fs;
			}
	};
});

