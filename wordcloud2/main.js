(function(){
	//scriptを取得しないようにinnnerTextを使用
	if (document.getElementById("main") != null) {
		goodText = document.getElementById("main").innerText;
		console.log("main");
	}else if(document.getElementById("content") != null){
		goodText = document.getElementById("content").innerText;
		console.log("content");
	}else if(document.getElementById("bodycontent") != null){
		goodText = document.getElementById("bodycontent").innerText;
		console.log("bodycontent");
	}else if(document.body != null){
		goodText = document.body.innerText;
		console.log("全部失敗");
	};

	//bodycontent,content,main
	//splitを正規表現で複数設定
	var spword = /\s|\n|[.,"(){}“;§^=:*&%$]|"["|"]"/;
	var words = goodText.split(spword);
	var counts = {};
	//接置詞
	var adpositions = ["about","aboard","above","across","after","against","along","alongside","among","around","as","at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning","despite","down","during","except","for","For","from","in","inside","into","less","like","minus","near","of","off","on","onto","opposite","out","outside","over","past","plus","round","save","since","than","throught","till","to","toward","under","underneath","until","up","upon","via","with","within","without"];
	//冠詞
	var articles = ["the","a","an","The"];
	//接続後
	var conjunctions = ["and","or","nor","but","so","yet","except","either","neither","rather","because","while"];
	//助動詞
	var auxiliaryVerbs = ["be","can","could","have","may","might","must","need","shall","shoud","will","would"];
	//関係詞
	var relatives = ["whim","whose","which","that","as","than","what","whatever","whichever","whoever","when","where","why","how"];
	//代名詞
	var pronouns = ["i","me","my","mine","myself","you","your","yours","he","him","his","himself","she","her","hers","herself","it","its","itself","we","us","our","ours","ourselves","yourselves","they","them","their","theirs","themselves","this","This"];
	//BE動詞
	var beVerbs = ["is","am","are"];
	//記号
	var symbols = ["+","-","/","*","=","~",".",",","%","!","#","$","&","'","(",")","^","¥","|","@","[","{",";",":","]","}","?","_","//","||","{ ","} "];

	for (var i = 0, len = words.length; i < len; i++) {
		var wordone = words[i];
		word = wordone.trim();
		if (counts[word] === undefined) {
			counts[word] = 0;
		};
		counts[word]++;
	};
	for (key in counts){
		for (var i = 0, len = adpositions.length; i < len; i++) {
			var deleteWord = adpositions[i];
			if (key === deleteWord) {
				delete counts[key];
			};
		}
		for (var i = 0, len = articles.length; i < len; i++) {
			var deleteWord = articles[i];
			if (key === deleteWord) {
				delete counts[key];
			};
		}
		for (var i = 0, len = conjunctions.length; i < len; i++) {
			var deleteWord = conjunctions[i];
			if (key === deleteWord) {
				delete counts[key];
			};
		}
		for (var i = 0, len = auxiliaryVerbs.length; i < len; i++) {
			var deleteWord = auxiliaryVerbs[i];
			if (key === deleteWord) {
				delete counts[key];
			};
		}
		for (var i = 0, len = relatives.length; i < len; i++) {
			var deleteWord = relatives[i];
			if (key === deleteWord) {
				delete counts[key];
			};
		}
		for (var i = 0, len = pronouns.length; i < len; i++) {
			var deleteWord = pronouns[i];
			if (key === deleteWord) {
				delete counts[key];
			};
		}
		for (var i = 0, len = beVerbs.length; i < len; i++) {
			var deleteWord = beVerbs[i];
			if (key === deleteWord) {
				delete counts[key];
			};
		}
		for (var i = 0, len = symbols.length; i < len; i++) {
			var deleteWord = symbols[i];
			if (key === deleteWord) {
				delete counts[key];
			};
		}
		var fs = 12;
			fs += counts[key];
		document.write('<span style="font-size:' + fs + 'px;">' + key + ' </span>');
	} 
})();
