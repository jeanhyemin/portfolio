
const data = {
    labels: [
      '포인트 사용',
      '보너스 포인트 적립',
      '적립'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [100, 100, 100],
      backgroundColor: [
        'rgb(34, 136, 85)',
        'rgb(238, 102, 34)',
        'rgb(238, 172, 102)'
      ],
      hoverOffset: 10 //호버시 튀어나오는 정도
    }]
  };
              
  const config = {
    type: 'doughnut',
    data: data
  };
  
  const myChart = new Chart(
        document.getElementById('myChart'),
        config
  );