
	


function fnTourism(){
	
	var welcome = id('welcome');
//	var tourism = id('tourism')
	var arr = ['img/tree.jpg','img/title.png','img/title2.png','img/logo.png'];
	var num = 0;
	var Inageonoff = false;
	var Dateonoff = false;
	var timer = 0;
	var oldtime = new Date().getTime();
	
	
	for(var i=0;i<arr.length;i++){
		var oImg = new Image();
		oImg.src = arr[i];
		oImg.inload = function(){
			num++;
			if(num==arr.length){
				Inageonoff = true;
			}
		}
	}
	
	timer = setInterval(function(){
		var nowTime = new Date().getTime();
		var now = nowTime-oldtime;
		
		if(now>=6000){
			Dateonoff = true;
		}
		if(Inageonoff&&Dateonoff){
			clearInterval(timer);
			welcome.style.opacity = 0;
		}
		
	},100)	
}
			
