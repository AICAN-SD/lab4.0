function togglebutton(){
    var element = document.getElementById("startb");
    if(element.classList.contains('start')){
        element.classList.remove('start');
        element.innerHTML="Stop";
        element.classList.add('stop');
    }
    else{
        element.classList.add('start');
        element.classList.remove('stop');
        element.innerHTML="Start";
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