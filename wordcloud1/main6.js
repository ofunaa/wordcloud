//マッチで検索

//開始
$(function(){
	//情報取得
	var words = document.body.textContent;
	//分解して配列化
	var word = words.split(" ");
	var tango = [];
	//単語毎にループ
	for (var i = 0; i < word.length; i++) {
		//配列に存在するか調べる
		for(var i=0, len = tango.length; i < len; i++){
			if (word[i] == tango[i]){
				//存在したら
				var wordNum = word[i]+"Num";
				var word[i]++; 
			}
		}
		//存在しなかったらpush
		tango.push(word[i]);
	//単語毎のループ終了
	};
//終了
});