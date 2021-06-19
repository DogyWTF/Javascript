var light = document.querySelector(".lantern");
document.addEventListener("mousemove", function(e){
    var x = e.pageX;
    var y = e.pageY;
    light.style.background = "radial-gradient(circle at "+x+"px "+y+"px,transparent,#000 50%)";
})