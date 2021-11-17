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
// chart
const labels = [
    '16:47:5',
    '16:47:31',
    '16:47:44',
    '16:47:53',
    '16:48:0',
    '16:48:8',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'PH',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 10.5,6,7,9],
    }]
  };
  const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
        }
    }
  };
const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );