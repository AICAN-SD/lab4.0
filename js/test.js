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