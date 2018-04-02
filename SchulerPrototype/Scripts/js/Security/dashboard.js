
      var ctxbar = $("#myChartbar");
      var ctxline = $("#myChartline");
      var ctxpie = $("#myChartpie");
      var ctxbargroup = $("#myBarGroupChart");

      var myChartbar = new Chart(ctxbar, {
          type: 'bar',
          data: {
              labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
              datasets: [{
                  label: 'Weekly Visitor Count',
                  data: [289, 190, 252, 228, 240],
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
                title: {
                          display: true,
                          text: 'Weekly Visitor Count'
                      },
                legend: { 
                          display: false 
                        }
          }
      });

      var myChartline = new Chart(ctxline, {
          type: 'line',
          data: {
              labels: ["Nov. 1", "Nov. 2", "Nov. 3", "Nov. 4", "Nov. 5", "Nov. 6", "Nov. 7", "Nov. 8", "Nov. 9", "Nov. 10", "Nov. 11", "Nov. 12"],
              datasets: [{
                  label: 'Daily Visitor Count',
                  data: [24, 19, 25, 16, 34, 0, 0, 19, 25, 31, 17, 22],
                  backgroundColor: [
                      'rgba(75, 192, 192, 0.2)'
                  ],
                  borderColor: [
                      'rgba(75, 192, 192, 1)'
                  ],
                  borderWidth: 1,
                  pointBackgroundColor: 'rgba(75, 192, 192, 0.2)'
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
                title: {
                          display: true,
                          text: 'Daily Visitor Count'
                      },
                legend: { 
                          display: false 
                        }
          }
      });

      var myPieChart = new Chart(ctxpie,{
          type: 'pie',
          data: {
                labels: ['Monday','Tuesday','Wednesday', 'Thursday', 'Friday'],
                datasets: [{
                    data: [24, 19, 25, 16, 34],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)'
                    ],
                     borderColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)'
                    ],
                     hoverBackgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)'
                    ],
                     hoverBorderColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)'
                    ],
                    hoverBorderWidth: 5,
                    borderWidth: 1
                }], 
                // These labels appear in the legend and in the tooltips when hovering different arcs
               
            }, options: {
                  title: {
                            display: true,
                            text: 'Weekly Visitor Count',
                        }
            }
      });

      var myBarGroupChart = new Chart(ctxbargroup,{
          type: 'bar',
          data: {
                labels: ['Yesterday','Today'],
                datasets: [{
                            label: "Yesterday",
                            backgroundColor:  'rgba(255, 99, 132, 0.2)',
                            data: [25]
                          }, {
                            label: "Today",
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            data: [34]
                }], 
            }, options: {
                  title: {
                            display: true,
                            text: 'Visitor Comparison',
                        },
                        legend: { 
                          display: false 
                        },scales: {
                          yAxes:[{
                              ticks: {
                                  beginAtZero: true,
                                  fontSize: 14
                              }
                          }]
                      }
                    }
              });
