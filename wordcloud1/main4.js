//reduceで検索

//開始
$(function(){
	//情報取得
	var words = document.body.textContent;
	//分解して配列化
	var word = words.split(" ");
	console.log(word);
	//単語毎にループ
	for (var i = 0; i < word.length; i++) {
		//ループしている単語を取得
		var tango = word[i];
		console.log(tango);
		//マッチの回数取得
		var points = Array.prototype.reduce.call(word, function(a, b) {return a + (b === 'a')},0); 
		console.log(points);
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





//開始
$(function(){
	//情報取得
	var words = document.body.textContent;
	//分解して配列化
	var word = words.split(" ");
	console.log(word);
	//マッチの回数取得
	var j = 'at';
	re = new RegExp(j ,"g");
	var points = words.match(re);
	console.log(points.length)

//終了
});




//indexofでカウント

//開始
$(function(){
	//情報取得
	var words = document.body.textContent;
	//分解して配列化
	var word = words.split(" ");
	console.log(word);
	var count = 0;
	//単語毎にループ
	for (var i = 0; i < word.length; i++) {
		//ループしている単語を取得
		var tango = word[i];
		console.log(tango)
		//マッチの回数取得
		
		var pos = word.indexOf(tango);

		while ( pos != -1 ) {
		   count++;
		   pos = words.indexOf(tango, pos + 1);
		}
		console.log(tango + " is " + count);
		//classを付与
		//document.write('<p class="fs' + points + '">'+ tango + '</p> ');
		//classにプロパティを付与
			//classnameにfont-sizeを指定
			// var element = document.getElementById(classname);
			// 	element.style.fontSize = fs;
			// 	element.style.color = "hsl(0, 100%, 50%)";

	//単語毎のループ終了
	};
//終了
});

//マッチで検索

//開始
$(function(){
	//情報取得
	var words = document.body.textContent;
	//分解して配列化
	var word = words.split(" ");
	console.log(word);
	//単語毎にループ
	for (var i = 0; i < word.length; i++) {
		//ループしている単語を取得
		var tango = word[i];
		console.log(tango)
		//マッチの回数取得
		var pointsNum = 0;
		var points = words.match(tango);
		console.log(points)
		// if (points !== null){
		// 	pointsNum = points.length;
		// }
		// console.log(pointsNum);
		//classを付与
		//document.write('<p class="fs' + points + '">'+ tango + '</p> ');
		//classにプロパティを付与
			//classnameにfont-sizeを指定
			// var element = document.getElementById(classname);
			// 	element.style.fontSize = fs;
			// 	element.style.color = "hsl(0, 100%, 50%)";

	//単語毎のループ終了
	};
//終了
});


//開始
$(function(){
	//情報取得
	var words = document.body.textContent;
	//分解して配列化
	var word = words.split(" ");
	console.log(word);
	//マッチの回数取得
	re = new RegExp(/at/g);
	var points = words.match(re);
	console.log(points.length)

//終了
});


re = new RegExp("^" + vname + "[0-9]+$");




//splitで検索


//開始
$(function(){
	//情報取得
	var words = document.body.textContent;
	//分解して配列化
	var word = words.split(" ");
	console.log(word);
	//単語毎にループ
	for (var i = 0; i < word.length; i++) {
		//ループしている単語を取得
		var tango = word[i];
		//マッチの回数取得
		reg = new RegExp(tango);
		var points = words.match(reg ,'g');
		var pointsNum = 0;
		if (pointsNum !== null){
			pointsNum = points.length;
		}
		//classを付与
		document.write('<p class="fs' + pointsNum + '">'+ tango + '</p> ');
		//classにプロパティを付与
			//classnameにfont-sizeを指定
			// var element = document.getElementById(classname);
			// 	element.style.fontSize = fs;
			// 	element.style.color = "hsl(0, 100%, 50%)";

	//単語毎のループ終了
	};
//終了
});






//現在できていない事

	//より早くするための方法
		//一度出てきた単語が出てきたら、ループを一回飛ばし

			// if(arr.indexOf(search_num) !== -1) {
			//  //要素があった場合
			// } else {
			//  //要素が無かった場合
			// }
		
		//半角スペースが出てきたらループを一回飛ばし

	//より綺麗にワードクラウドを作るための方法
		//マッチした回数を均等に等分してクラスを付与する
			//配列を.lengthして、15で割り、その値を利用してif文を作成する
		//色の濃度を変更する
			//色の彩度を管理する