function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
includeHTML();

  function changeTimer(){
    var element = document.getElementById("timer");
    var timer1 = document.getElementById("timer1")
    var timer2 = document.getElementById("timer2")
    if(element.value === "Regular"){
        timer1.style.display = "block";
        timer2.style.display = "none";
    }
    else{
        timer2.style.display = "block";
        timer1.style.display = "none";
    }
  }

  function setdate(){
    var startdate1 = document.getElementById("startdate1")
    var enddate1 = document.getElementById("enddate1")
    var startdate2 = document.getElementById("startdate2")
    var enddate2 = document.getElementById("enddate2")
  }