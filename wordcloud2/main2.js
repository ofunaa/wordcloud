(function(){
	//pタグを抽出
	var ptag = document.getElementsByTagName("p");
	//配列初期化
	var ptagTexts = [];
	for (var i = 0, len = ptag.length; i < len ; i++) {
		//テキスト取得
		var ptagText = ptag[i].innerText;
		//配列にテキストを追加
		ptagTexts.push(ptagText);
		// console.log(goodText);
	};
	//配列を文字列か
	var	tagText1 = ptagTexts.join(",");
	console.log("pは" + tagText1);

	//以下、h1,h2,h3,h4は同上
	var h1tag = document.getElementsByTagName("h1");
	var h1tagTexts = [];
	for (var i = 0, len = h1tag.length; i < len ; i++) {
		var h1tagText =h1tag[i].innerText;
		h1tagTexts.push(h1tagText);
		// console.log(goodText);
	};
	var	tagText2 = h1tagTexts.join(",");
	console.log("h1は" + tagText2);


	var h2tag = document.getElementsByTagName("h2");
	var h2tagTexts = [];
	for (var i = 0, len = h2tag.length; i < len ; i++) {
		var h2tagText =h2tag[i].innerText;
		h2tagTexts.push(h2tagText);
		// console.log(goodText);
	};
	var	tagText3 = h2tagTexts.join(",");
	console.log("h2は" + tagText3);


	var h3tag = document.getElementsByTagName("h3");
	var h3tagTexts = [];
	for (var i = 0, len = h3tag.length; i < len ; i++) {
		var h3tagText =h3tag[i].innerText;
		h3tagTexts.push(h3tagText);
		// console.log(goodText);
	};
	var	tagText4 = h3tagTexts.join(",");
	console.log("h3は" + tagText4);


	var h4tag = document.getElementsByTagName("h4");
	var h4tagTexts = [];
	for (var i = 0, len = h4tag.length; i < len ; i++) {
		var h4tagText = h4tag[i].innerText;
		h4tagTexts.push(h4tagText);
		// console.log(goodText);
	};
	var	tagText5 = h4tagTexts.join(",");
	console.log("h4は" + tagText5);

	//p,h1,h2,h3,h4を合体
	var goodText = tagText1 + tagText2 + tagText3 + tagText4 + tagText5;

	//splitを正規表現で複数設定
	var spword = /\s|\n|[.,"(){}“;§^=:*&%$]|"["|"]"/;
	var words = goodText.split(spword);
	var counts = {};

	for (var i = 0, len = words.length; i < len; i++) {
		var wordone = words[i];
		word = wordone.trim();
		if (counts[word] === undefined) {
			counts[word] = 0;
		};
		counts[word]++;
	};
	for (key in counts){
		var fs = 12;
			fs += counts[key];
		document.write('<span style="font-size:' + fs + 'px;">' + key + ' </span>');
	} 
})();
