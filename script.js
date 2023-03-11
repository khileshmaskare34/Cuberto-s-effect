var cursor = document.querySelector("#cursor");
var main = document.querySelector("#main");
main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
})

document.querySelector("#overflow1")
.addEventListener("mousemove", function(dets){
    document.querySelector("#elem1 img").style.scale = 1
    document.querySelector("#elem1 img").style.opacity = 1
    document.querySelector("#elem1 img").style.left = (dets.x-50) + "px"
    document.querySelector("#elem1 img").style.top = (dets.y-340) + "px"
})

document.querySelector("#overflow1")
.addEventListener("mouseleave", function(dets){
    document.querySelector("#elem1 img").style.scale = 0
    document.querySelector("#elem1 img").style.opacity = 0
    document.querySelector("#elem1 img").style.left = (dets.x-50) + "px"
    document.querySelector("#elem1 img").style.right = (dets.y-340) + "px"
})

document.querySelector("#overflow2")
.addEventListener("mousemove", function(dets){
    document.querySelector("#elem2 img").style.scale = 1
    document.querySelector("#elem2 img").style.opacity = 1
    document.querySelector("#elem2 img").style.left = (dets.x -575) + "px"
    document.querySelector("#elem2 img").style.top = (dets.y -340) + "px"
})

document.querySelector("#overflow2")
.addEventListener("mouseleave", function(dets){
    document.querySelector("#elem2 img").style.scale = 0
    document.querySelector("#elem2 img").style.opacity = 0
    document.querySelector("#elem2 img").style.left = (dets.x -575) + "px"
    document.querySelector("#elem2 img").style.top = (dets.y -340) + "px"
})

document.querySelector("#overflow3")
.addEventListener("mousemove", function(dets){
    document.querySelector("#elem3 img").style.scale = 1
    document.querySelector("#elem3 img").style.opacity = 1
    document.querySelector("#elem3 img").style.left = (dets.x -1100) + "px"
    document.querySelector("#elem3 img").style.top = (dets.y -340) + "px"
})

document.querySelector("#overflow3")
.addEventListener("mouseleave", function(dets){
    document.querySelector("#elem3 img").style.scale = 0
    document.querySelector("#elem3 img").style.opacity = 0
    document.querySelector("#elem3 img").style.left = (dets.x -1100) + "px"
    document.querySelector("#elem3 img").style.top = (dets.y -340) + "px"
})