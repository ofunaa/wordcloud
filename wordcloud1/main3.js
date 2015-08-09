$(function(){
	//boduからテキスト情報を持ってくる
	var words = document.body.textContent;
	//半角スペースで区切って配列にする
	var word = words.split(" ");
	//あとで使う連想配列を用意
	// var wordhash = {};
	//配列を一単語毎に繰り返す
	for (var i = 0; i < word.length; i++) {
		var tango = word[i];
		//console.log(tango);

		//単語の個数を数える
		var m = word.match(tango);
		console.log(m);
		// var wordnumber = m.length;
		// console.log(wordnumber);
		//wordnumberの配列を作る
		//wordhash = {key:tango, number:wordnumber};
		//console.log(wordhash);
	};
	//連想配列をソート
	// wordhash.sort(
	// 	function(a,b){
	// 		var aName = a["number"];
	// 		var bName = b["number"];
	//     if( a < b ) return -1;
	//     if( a > b ) return 1;
	//     return 0;
	//     }
	// );
	// //連想配列をループでまわす
	// for (var i in wordhash) {
	// 	console.log(wordhash[i]);
	// };
});


// //tangoと同じものがすでに連想配列の中に入っていないか確認
		// wordhash.filter(function(value, index, array){
		// 	//連想配列に入っている場合は次のループへ
		// 	if (value.key === tango) {
		// 		console.log(tango + "is nextloop")
		// 		// break;
		// 	};
		// });