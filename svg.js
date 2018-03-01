var pic = document.getElementById("vimage");


var first = true;


var x
var y

var drawDot = function(xc,yc){
    var cl=document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
    );
    cl.setAttribute("cx", xc);
    cl.setAttribute("cy", yc);
    cl.setAttribute("r",50);
    cl.setAttribute("fill","blue");
    cl.setAttribute("stroke","black");
    pic.appendChild(cl)
    if (!first){ 
	var l=document.createElementNS(
	    "http://www.w3.org/2000/svg",
	    "line"
	);
	l.setAttribute("x1", x);
	l.setAttribute("y1", y);
	l.setAttribute("x2",xc);
	l.setAttribute("y2",yc);
	l.setAttribute("stroke-width","15");
	l.setAttribute("stroke","pink");
	pic.appendChild(l)
    }
    if (first){
	first = false;
    }
    x=xc;
    y=yc;

}

var change = function(e){
    e.preventDefault();
    this.setAttribute("fill","green")
}


var clicked = function(e){
    if (e.toElement == this){
        drawDot(e.offsetX, e.offsetY)
    }
}


var clear = function(e){
    pic.innerHTML="";
    first = true;
    
}

pic.addEventListener("click", clicked);

c = document.getElementById("clr")
c.addEventListener("click",clear)
