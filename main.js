var mouseEvent="empty";
var radius=20;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
 
  color="red";
  width_of_line=2;
    
   canvas.addEventListener("mousedown",myMouseDown);
     
    function myMouseDown (e){

        mouseEvent="mousedown";
        color=document.getElementById("color").value;
        radius=document.getElementById("radius").value;
          
    } 
      
       canvas.addEventListener("mousemove", myMouseMove);
        
          function myMouseMove(e){
              
              current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
              current_position_of_mouse_y= e.clientY - canvas.offsetTop;

              if(mouseEvent=="mousedown"){

               ctx.beginPath();
               ctx.strokeStyle=color;
               ctx.lineWidth=width_of_line;
                ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
                ctx.stroke();
              }
          
          }
           
          canvas.addEventListener("mouseup",myMouseUp);
     
            function myMouseUp (e){

             mouseEvent="mouseup";
             
            } 

            canvas.addEventListener("mouseleave",myMouseLeave);
     
                 function myMouseLeave (e){

                       mouseEvent="mouseleave";
          
            } 
             
                
           
