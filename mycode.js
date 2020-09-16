console.log("heloo");

let s,swidth;
window.onload =init;

function init(){
        if(window.Event){
            document.captureEvents(Event.MOUSEMOVE);
        }
        document.onmousemove=getCursorY;
}

function getCursorY(e){
    s = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    swidth=window.innerWidth;
if (swidth<700) {
    console.log(swidth);

    if (s>=400) {
        console.log("ki");
        document.getElementById("head").style.display="none";
   
    }else{
        document.getElementById("head").style.display="";
    }
   
}else{
    document.getElementById("head").style.display="";
}

  
}


  