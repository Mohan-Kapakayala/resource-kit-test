
const ctx = document.getElementById('barchart');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [20, 25, 30, 35, 40,],
      datasets: [
        {
          label: 'employer',
          data: [ 200, 300,  250, 350, 400],
          backgroundColor: 'rgb(50,50,139)',
          borderWidth: 1
        },
        {
          label: 'Employee',
          data: [150, 150, 120, 170, 200],
          backgroundColor: 'rgb(70,80,139) ',
          borderWidth: 1
        },
        {
          label: 'Total Interest',
          data: [300, 450, 370, 520, 600],
          backgroundColor: 'rgb(0,0,200)', 
          borderWidth: 1
        }
        
      ]
    },
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
});



