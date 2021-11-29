   function phcolor(){
     var ele = document.getElementById("ph_bar")
     var ph = document.getElementById("ph_val")
     var phtext = ph.textContent
     if(phtext<1){
       ele.style.fill = "#da3d75"
     }
     else if(phtext<2){
      ele.style.fill = "#db5580"
     }
     else if(phtext<3){
      ele.style.fill = "#e0658a"
     }
     else if(phtext<4){
      ele.style.fill = "#e2749a"
     }
     else if(phtext<5){
      ele.style.fill = "#e587a7"
     }
     else if(phtext<6){
      ele.style.fill = "#e799b5"
     }
     else if(phtext<7){
      ele.style.fill = "#e7abc1"
     }
     else if(phtext<8){
      ele.style.fill = "#3CEA43"
     }
     else if(phtext<9){
      ele.style.fill = "#8dc4df"
     }
     else if(phtext<10){
      ele.style.fill = "#75bada"
     }
     else if(phtext<11){
      ele.style.fill = "#5fadd2"
     }
     else if(phtext<12){
      ele.style.fill = "#469fcb"
     }
     else if(phtext<13){
      ele.style.fill = "#3293c3"
     }
     else if(phtext<14){
      ele.style.fill = "rgb(54, 134, 185)"
     }
     else{
      ele.style.fill = "rgb(53, 122, 175)"
     }  
   }

   phcolor();
   var interval;

   function countdown() {
     clearInterval(interval);
     interval = setInterval( function() {
         var timer = $('.js-timeout').html();
         timer = timer.split(':');
         var minutes = timer[0];
         var seconds = timer[1];
         seconds -= 1;
         if (minutes < 0) return;
         else if (seconds < 0 && minutes != 0) {
             minutes -= 1;
             seconds = 59;
         }
         else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
   
         $('.js-timeout').html(minutes + ':' + seconds);
   
         if (minutes == 0 && seconds == 0) {
            var timer_text = document.getElementById("timer_text")
            var element = document.getElementById("startb");
            element.classList.add('start');
            element.classList.remove('stop');
            element.innerHTML="Start";
            timer_text.style.display="none";
            clearInterval(interval)};
     }, 1000);
   }


function togglebutton(){
    var timer_text = document.getElementById("timer_text")
    var element = document.getElementById("startb");
    if(element.classList.contains('start')){
        element.classList.remove('start');
        element.innerHTML="Stop";
        element.classList.add('stop');
        timer_text.style.display = "block";
        $('.js-timeout').text("2:00");
     countdown();
    }
    else{
        element.classList.add('start');
        element.classList.remove('stop');
        element.innerHTML="Start";
        timer_text.style.display = "none";
        $('.js-timeout').text("2:00");
     clearInterval(interval);
    }
}
function tableChange(){
    var element = document.getElementById("ph_cali");
    var point2 = document.getElementById("point2")
    var point3 = document.getElementById("point3")
    var point5 = document.getElementById("point5")
    if(element.value === "2point"){
        point2.style.display = "flex";
        point3.style.display = "none";
        point5.style.display = "none";
    }
    else if(element.value === "3point"){
        point3.style.display = "flex";
        point2.style.display = "none";
        point5.style.display = "none";
    }
    else {
        point5.style.display = "flex";
        point2.style.display = "none";
        point3.style.display = "none";
    }
    return false;
}