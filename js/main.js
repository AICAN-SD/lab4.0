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