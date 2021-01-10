console.log('hello my javascript is working')
document.getElementById("button1").onclick=function(){
    document.getElementById("box").style.height ="300px"
}
document.getElementById("button2").onclick=function(){
    console.log("I am here")
  document.getElementById("box").style.backgroundColor ="blue";
}
document.getElementById("button3").onclick=function(){
    document.getElementById("box").style.opacity= "fadeIn(slow)";
    document.getElementById("box").style.opacity= "fadeIn(500)";
}
