
	function bind(obj, ev, fn) { 
	    if (obj.addEventListener) {
	        obj.addEventListener(ev, fn, false);
	    } else {
	        obj.attachEvent('on' + ev, function() {
	            fn.call(obj);
	        });
	    }
	}
	
	function view() {
	    return {
	        w: document.documentElement.clientWidth,
	        h: document.documentElement.clientHeight
	    };
	}
	
	function addClass(obj, sClass) { 
	    var aClass = obj.className.split(' '); 
	    if (!obj.className) {
	        obj.className = sClass;
	        return;
	    }
	    for (var i = 0; i < aClass.length; i++) {
	        if (aClass[i] === sClass) return;
	    }
	    obj.className += ' ' + sClass;
	}
	
	function removeClass(obj, sClass) { 
	    var aClass = obj.className.split(' ');
	    if (!obj.className) return;
	    for (var i = 0; i < aClass.length; i++) {
	        if (aClass[i] === sClass) {
	            aClass.splice(i, 1);
	            obj.className = aClass.join(' ');
	            break;
	        }
	    }
	}

	function fnIndex(){
		var shuff = document.getElementById('shuff');
		var list = shuff.getElementsByClassName('picture_list')[0];
		var lis = list.getElementsByTagName('li');
		var As = shuff.getElementsByTagName('span');
		var timer = 0;
		var num = 0;
		var w = view().w;
		var now = 0;
		
		
		var startx = 0;
		var x = 0;
		
		auto() //轮播图定时器
		function auto(){
			timer = setInterval(function(){
				num++;
				num = num%lis.length;
				tab()
			},2000)
		}
		
		
		
		bind(list,'touchstart',start);
		bind(list,'touchmove',move);
		bind(list,'touchend',end);
		
		function start(ev){
			clearInterval(timer);
			ev = ev.changedTouches[0];
			list.style.transition = 'none'
			startx = ev.pageX;
			x = now;
		}
		function move(ev){
			ev = ev.changedTouches[0];
			var disx = ev.pageX - startx;
			now = x + disx;
			list.style.transform = list.style.webkitTransform ="translateX("+now+"px)"; 
		}
		function end(){
			
			num = -Math.round(now/w);
			now = -num*w;
			list.style.transition = '.5s';
			list.style.transform = list.style.webkitTransform ="translateX("+now+"px)"; 
			if(num>=lis.length){
				num = lis.length-1;
			}
			if(num<=0){
				num=0;
			}
			tab();
			auto()
		}
		
		function tab(){
			now = -num*w;
			list.style.transition = '.5s';
			list.style.transform = list.style.webkitTransform ="translateX("+now+"px)"; 
			
			for(var i=0;i<As.length;i++){
				removeClass(As[i],"active");
			}
			addClass(As[num],'active');
		}
	}


