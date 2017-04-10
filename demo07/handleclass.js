
	var handleClass = (function(){

		function addClass(dom,str){
			var newClassName = "";
			if(dom.className){
				className = dom.className;
				newClassName = className + ' ' + str;
			}else{
				newClassName = str;
			}
			dom.className = newClassName;
		}

		function removeClass(dom,str){
			var arr = dom.className.split(" ");
			for(var i = 0;i<arr.length;i++){
				if(arr[i] === str){
					arr.splice(i,1);
				}
			}
			dom.className = arr.join(" ");
		}

		function siblings(dom) {
			var newArr = [];
			var par = dom.parentNode;  
			var child= par.children; 
			for(var i = 0;i<child.length;i++){
				if(child[i] !== dom){
					newArr.push(child[i]);
				}
			}
			return newArr;
		}
		return {
				addClass: addClass,
				removeClass: removeClass,
				siblings: siblings
			}
	})()

		