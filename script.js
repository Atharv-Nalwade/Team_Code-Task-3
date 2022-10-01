
var scroll_img=document.getElementById("scroll_img");

 //scroll_img.src="images/5.jpg"

var curr_pos=1; // max is 5 here
document.getElementById('prev_button').addEventListener("click",()=>{
  curr_pos--;
  if(curr_pos<=0) curr_pos=5;
  scroll_img.src="images/"+curr_pos+".jpg";

});

document.getElementById('next_button').addEventListener("click",()=>{
  curr_pos++;
  if(curr_pos>5) curr_pos=1;
  scroll_img.src="images/"+curr_pos+".jpg";

});
