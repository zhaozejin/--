window.onload = function(){
    var next = document.getElementById("second");
    var all = document.getElementById("all");
    var neix = document.getElementsByClassName("neix");
    var nei = document.getElementsByClassName("nei");
    all.onmouseover = function(){
        next.style.display = "block";
    }
    all.onmouseout = function(){
        setTimeout(function(){
            next.style.display = 'none';
        },3000);
    }
    
    neix.onmouseover = function(){
        nei.style.top = "240px"
    }
    neix.onmouseout = function(){
        nei.style.top = "266px"
    }
}