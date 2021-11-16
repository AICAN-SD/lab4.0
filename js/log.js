function log(){
    var list = document.getElementById("tablecontent");
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var td4 = document.createElement("td")
    // date
    var today = new Date();
    //  time
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
    td1.innerHTML = today;
    td1.classList.add("mytd");

    td2.innerHTML = time;
    td2.classList.add("mytd");
    
    td3.innerHTML = 6.5;
    td3.classList.add("mytd");
    
    td4.innerHTML = 4.3;
    td4.classList.add("mytd");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    list.appendChild(tr);

}