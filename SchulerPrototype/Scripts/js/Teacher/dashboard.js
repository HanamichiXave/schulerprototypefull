
      var ctxbar = $("#myChartbar");
      var ctxline = $("#myChartline");
      var ctxbar2 = $("#myChartbar2");

      var myChartbar = new Chart(ctxbar, {
          type: 'horizontalBar',
          data: {
              labels: ["90-100", "80-89", "70-79", "60-69", "50-59"],
              datasets: [{
                  label: 'Student',
                  data: [1, 2, 3, 4, 5],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  xAxes: [{
                      ticks: {
                          stepSize: 1,
                          min: 0,
                          autoSkip: false,
                          fontSize: 14
                      }
                  }],
                  yAxes:[{
                      ticks: {
                          beginAtZero: true,
                          fontSize: 14
                      }
                  }]
              }, 
                     legend: { 
                       display: false 
                     }
          }
      });

      var myChartline = new Chart(ctxline, {
          type: 'line',
          data: {
              labels: ["Jun","Jul","Sept","Oct","Nov","Dec"],
              datasets: [{
                  label: 'Achievement',
                  data: [3, 5, 11, 19, 14, 18],
                  backgroundColor: [
                      'rgba(75, 192, 192, 0.2)'
                  ],
                  borderColor: [
                      'rgba(75, 192, 192, 1)'
                  ], 
                  hoverBackgroundColor: [
                      'rgba(75, 192, 192, 1)'
                  ],
                  borderWidth: 1
              }]
          },
           options: {
              scales: {
                  xAxes: [{
                      ticks: {
                          stepSize: 1,
                          min: 0,
                          autoSkip: false,
                          fontSize: 14
                      }
                  }],
                  yAxes:[{
                      ticks: {
                          beginAtZero: true,
                          fontSize: 14
                      }
                  }]
              }, 
                     legend: { 
                       display: false 
                     }
          }
      });

       var myChartbar = new Chart(ctxbar2, {
          type: 'bar',
          data: {
              labels: ["Nov 1-7", "Nov 8-14", "Nov 15-21", "Nov 22-28", "This Week"],
              datasets: [{
                  label: 'Problem Solved',
                  data: [5524, 7655, 3213, 6234, 8500],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  xAxes: [{
                      ticks: {
                          stepSize: 1,
                          min: 0,
                          autoSkip: false,
                          fontSize: 14
                      }
                  }],
                  yAxes:[{
                      ticks: {
                          beginAtZero: true,
                          fontSize: 14
                      }
                  }]
              }, 
                     legend: { 
                       display: false 
                     }
          }
      });

