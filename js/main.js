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

  var device = document.getElementById("link1")
  var settings = document.getElementById("link2")
  var setups = document.getElementById("link3")

  var device_c = document.getElementById("device_c")
  var setting_c = document.getElementById("setting_c")
  var setup_c = document.getElementById("setup_c")

function devices(){
  device.classList.add("active")
  settings.classList.remove("active")
  setups.classList.remove("active")

  device_c.classList.add("show","active")
  setting_c.classList.remove("show","active")
  setup_c.classList.remove("show","active")
}

function setting(){
  device.classList.remove("active")
  settings.classList.add("active")
  setups.classList.remove("active")

  device_c.classList.remove("show","active")
  setting_c.classList.add("show","active")
  setup_c.classList.remove("show","active")
}

function setup(){
  device.classList.remove("active")
  settings.classList.remove("active")
  setups.classList.add("active")

  device_c.classList.remove("show","active")
  setting_c.classList.remove("show","active")
  setup_c.classList.add("show","active")
}