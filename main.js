canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
color = "red";
var mouse_event = "empty";
line_width = 4;


canvas.addEventListener("mousedown",mousemd);
function mousemd(e){
    color = document.getElementById("color").value;
    line_width = document.getElementById("line-width").value;
    mouse_event = "mousedown";
    
}

canvas.addEventListener("mousemove",mousemv);
function mousemv(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;

        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y , 30 , 0 , Math.PI * 2);
        ctx.stroke();


    }

     
}

canvas.addEventListener("mouseup",mouseup);
function mouseup(){
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave",mouselv);
function mouselv(){
    mouse_event = "mouseleave";
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}