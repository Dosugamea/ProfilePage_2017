var time = new Date(); 
//年・月・日・曜日を取得する
var month = time.getMonth()+1;
var day = time.getDate();

if (month <= 9) { var month = "0" + month;}
if (day <= 9) { day = "0" + day;}

//今日の日付から記事投稿時刻を指定する
var today = time.getFullYear()+"/"+month+"/"+day+" 07:00";
var one_ago = time.getFullYear()+"/"+month+"/"+(day-1)+" 07:00";
var two_ago = time.getFullYear()+"/"+month+"/"+(day-2)+" 07:00";


//デジタル時計もどき
function clock() {
		var time = new Date(); 
		
		var hour = time.getHours();
		if (hour => 12){ hour = hour - 12; var ampm = "PM "; }else{var ampm = "AM ";}
		if (hour < 10){ hour = "0" + hour;}
		
		var minutes = time.getMinutes()
		if (minutes < 10){ minutes = "0" + minutes;}
		
		var seconds = time.getSeconds();
		if (seconds < 10){ seconds = "0" + seconds;}
		
		var msg = ampm + hour + ":" + minutes + ":" + seconds;
		document.getElementById("clock").innerHTML = msg;
}
setInterval('clock()',1);

var title = "[雪見だいふくはいいぞ。]";
var n = 0;

function ti(){
		if (n < title.length - 1) {n++}else{n = 0;}	
		document.title = title.slice(n) + title;
}
setInterval('ti()',250);