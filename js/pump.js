function slide(){
    var clock = document.getElementById("clock")
    var anticlock = document.getElementById("anticlock")
  
        clock.checked = !clock.checked
        anticlock.checked= !anticlock.checked
    return false;
}