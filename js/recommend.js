var recommend = [
"sm9",
"1397552685",
"1444806625",
"1484126967",
"sm30477474",
"sm30346083",
"1484208381",
"1484621699",
"sm2959233",
"1484109682",
"1373442114"
];

if (document.cookie != ""){
	console.log("CookieExist");
	var id = document.cookie.split( '; ' )[ 0 ].split( '=' )[ 1 ];
	console.log(id);
	var movie = "<iframe width='95%' height='85%' src='http://ext.nicovideo.jp/thumb/" + recommend[id] +
	"' scrolling='no' style='border:solid 1px #CCC;' frameborder='0'></iframe>"
}else{
	var expire = new Date();
	expire.setTime( expire.getTime() + 1000 * 3600 * 24 );
	var rand = Math.floor( Math.random() * (recommend.length) );
	document.cookie = 'data=' + rand + '; expires=' + expire.toUTCString();
	console.log("Burn Cookie! id: " + rand);
	var movie = "<iframe width='95%' height='63%'src='http://ext.nicovideo.jp/thumb/" + recommend[rand] +
	"' scrolling='no' style='border:solid 1px #CCC;' frameborder='0'></iframe>"
	
	if (rand==1 || rand==2){
			var movie = movie + "<br>あぁ^~ こころがぴょんぴょんするんじゃぁ^~"
	}else if (rand == 3 ){
			var movie = movie +"<br>すごーい！きみはおすすめされたフレンズなんだね！"
	}else{
		var movie = "<iframe width='95%' height='85%'src='http://ext.nicovideo.jp/thumb/" + recommend[rand] +
	"' scrolling='no' style='border:solid 1px #CCC;' frameborder='0'></iframe>"
	}
}

document.write(movie);
