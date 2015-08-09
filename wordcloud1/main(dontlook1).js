(function(){
	var words = document.body.textContent.split(" ");
	var counts = {};
	for (var i = 0, len = words.length; i < len; i++) {
		var word = words[i];
		if (counts[word] === undefined) {
			counts[word] = 0;
		};
		counts[word]++;
	};
	for(key in counts){
		var fs = 12;
			fs = fs + counts[key];
		document.write('<span style="font-size:'+fs+'px">'+key+'</span>');
	}
})();