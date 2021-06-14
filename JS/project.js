var i = 0; // Variables declaration for the next functions...
var o = 0;
var p = 0;
function myFunction(){ //Animation progress bar 1
	var i = 0;
	if (i == 0){
		i = 1;
		var elem = document.getElementById("course");
		var width = 1;
		var id = setInterval(frame, 40);
		function frame(){
			if (width >= 100){
				clearInterval(id);
				i = 0;
			} else{
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}

}


function myFunction2(){ //Animation progress bar 2
	if (o == 0){
		o = 1;
		var elem = document.getElementById("course-2");
		var width = 1;
		var id = setInterval(frame, 40);
		function frame(){
			if (width >= 100){
				clearInterval(id);
				o = 0;
			} else{
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}

}

function myFunction3(){ //Animation progress bar 3
	if (p == 0){
		p = 1;
		var elem = document.getElementById("course-3");
		var width = 1;
		var id = setInterval(frame, 40);
		function frame(){
			if (width >= 70){
				clearInterval(id);
				p = 0;
			} else{
				width++;
				elem.style.width = width + "%";
				elem.innerHTML = width + "%";
			}
		}
	}

}



