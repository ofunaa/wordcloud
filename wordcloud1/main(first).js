window.onload = wordCloud();

function wordCloud(){
	//boduからテキスト情報を持ってくる
	var words = document.body.textContent;
	//半角スペースで区切って配列にする
	var word = words.split(" ");
	//配列を一単語毎に繰り返す
	for (var i = 0; i < word.length; i++) {
		var tango = word[i];
		//単語の個数を数える
		var sameword = words.split(tango).length - 1;
		if(1 == sameword) {
			document.write('<font size="2">'+ tango + '</font> ');
		} else if(2 == sameword || 3 == sameword){
			document.write('<font size="4">'+ tango + '</font> ');
		}else if(4 == sameword || 5 == sameword){
			document.write('<font size="6">'+ tango + '</font> ');
		}else if(6 == sameword || 7 == sameword){
			document.write('<font size="8">'+ tango + '</font> ');
		}else{
			document.write('<font size="9">'+ tango + '</font> ');
		}
	}
}


