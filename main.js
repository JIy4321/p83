var last_position_of_x, last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
lineWidth= 2;
var width=screen.width;
newwidth=screen.width - 70;
newheight=screen.height - 300;
if( width < 992)
{
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
console.log("my_touchstart");
color=document.getElementById("color").value;
lineWidth=document.getElementById("width_of_line").value;
last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
console.log("my_touchmove");    
currrent_position_of_touch_x= e.touches[0].clientX - canvas.offsetLeft;
currrent_position_of_touch_y= e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= lineWidth;

    ctx.moveTo(last_position_of_x , last_position_of_y);
    ctx.lineTo(currrent_position_of_touch_x,currrent_position_of_touch_y);
    ctx.stroke();

 last_position_of_x=currrent_position_of_touch_x;
 last_position_of_y=currrent_position_of_touch_y;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

