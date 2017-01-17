	function startMove (obj,attr,iTarget) {
			clearInterval(obj.timer);
			var timer,attrValue;
			obj.timer = setInterval(function (){
				if(attr == 'opacity'){
					attrValue = parseFloat(getStyle(obj,attr)*100);
				}else{
					attrValue = parseInt(getStyle(obj,attr));
				}
				var speed = (iTarget - attrValue)/8;
				speed = speed>0 ? Math.ceil(speed):Math.floor(speed);
				if(attrValue == iTarget) {
					clearInterval(obj.timer);
				}else{
					if(attr=='opacity'){
						obj.style[attr] = (attrValue + speed)/100 ;
						obj.style.filter = 'alpha(opacity='+ attrValue+ speed +')';
					}else{
						obj.style[attr] = attrValue + speed + 'px';
					}
					
				}
			},50)
		}
		function getStyle(obj,attr){
			if(obj.currentStyle) {
				return obj.currentStyle[attr];
			}
			else {
				return getComputedStyle(obj,false)[attr];
			}
		}