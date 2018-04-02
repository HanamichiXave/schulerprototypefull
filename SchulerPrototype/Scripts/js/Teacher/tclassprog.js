
         $(document).ready(function(){
           var oTable = $('#classprog').DataTable({
             "orderCellsTop": false,
             "searchHighlight" : true,
           });
           $('#search').keyup(function(){
                 oTable.search($(this).val()).draw() ;
           });
           $(".dataTables_filter").hide();
           oTable.on('order.dt search.dt', function(){
             oTable.column(0, {search:'applied', order:'applied'}).nodes().each(
              function (cell, i) {
               cell.innerHTML = i+1;
               } );
           }).draw();
         });

      var ctxbar = $("#myChartbar");
      var ctxline = $("#myChartline");
      var ctxpie = $("#myChartpie");
      var ctxbargroup = $("#myBarGroupChart");
      var ctxbarhr = $("#myChartbarhr");
      var ctxdn = $("#myChartdn");
      var ctxlf = $("#myChartdnlf");


      var myChartbar = new Chart(ctxbar, {
          type: 'horizontalBar',
          data: {
              labels: ["K", "1", "2", "3", "4"
                        , "5", "6", "7", "8", "9"
                        , "10", "11", "12"],
              datasets: [{
                  label: 'Student',
                  data: [35, 76, 32, 53, 23, 56,34,42,75,47,74,46,52],
                  backgroundColor: [
                      '#ff0000','#ff8000','#ffff00','#80ff00', '#00ff00', '#00ff80',
                                 '#00ffff','#0080FF','#0000ff','#8000ff', '#ff00ff', '#ff0080',
                                 '#F08800'

                  ],
                  borderColor: [
                      '#ff0000','#ff8000','#ffff00','#80ff00', '#00ff00', '#00ff80',
                                 '#00ffff','#0080FF','#0000ff','#8000ff', '#ff00ff', '#ff0080',
                                 '#F08800'

                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  xAxes: [{
                      ticks: {
                          stepSize: 5,
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
                     },
                     title: {
                        display: true,
                        text: 'Student Enrolled'
                      }
          }
      });

       var myBarGroupChart = new Chart(ctxbargroup,{
          type: 'bar',
          data: {
                datasets: [{
                            label: "First Semester",
                            backgroundColor:  'rgba(255, 99, 132, 0.2)',
                            data: [5838]
                          }, {
                            label: "Second Semester",
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            data: [6464]
                           }, {
                            label: "Third Semester",
                            backgroundColor: 'rgba(255,140,0, 0.2)',
                            data: [5734]
                           }, {
                            label: "Fourth Semester",
                            backgroundColor: 'rgba(255, 206, 86, 0.2)',
                            data: [8453]
                           }], 
            }, options: {
                  title: {
                            display: false,
                            text: 'Profit Comparison',
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

      var myChartline = new Chart(ctxline, {
          type: 'line',
          data: {
              labels: ["1st Grading", "2nd Grading", "3rd Grading", "4th Grading"],
              datasets: [{
                  label: 'Male',
                  data: [80, 85, 90, 88],
                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  borderColor: 'rgba(54, 162, 235, 0.2)',
                  borderWidth: 1,
                  pointBackgroundColor: 'rgba(54, 162, 235, 0.2)'
              },{
                  label: 'Female',
                  data: [85, 89, 87, 93],
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 99, 132, 0.2)',
                  borderWidth: 1,
                  pointBackgroundColor: 'rgba(255, 99, 132, 0.2)'
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
                          display: false,
                          text: 'Monthly joinees and resignees'
                      },
          }
      });


      var myPieChart = new Chart(ctxpie,{
          type: 'pie',
          data: {
                labels: ['Barrowed','Returned','With Issue'],
                datasets: [{
                    data: [10, 20, 4],
                    backgroundColor: [
                      'Green','Purple','Red'
                    ],
                    borderColor: [
                      'Green','Purple','Red'
                    ],
                    hoverBackgroundColor: [
                      'Green','Purple','Red'
                    ],
                    hoverBorderColor: [
                     'Green','Purple','Red'
                    ],
                    hoverBorderWidth: 5,
                    borderWidth: 1
                }], 
                // These labels appear in the legend and in the tooltips when hovering different arcs
               
            }
      });

      var data = {
          datasets: [{
              data: [
                  30,
                  28,
                  25,
                  34,
                  29
              ],backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255,140,0, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)'
                ],
              label: 'My dataset' // for legend
          }],
          labels: [
              "Math",
              "English",
              "Science",
              "Physical Education",
              "Health"
          ]
      };
      var ctx = $("#myChartPolar");
      new Chart(ctx, {
          data: data,
          type: 'polarArea'
      });

      var myChartbar = new Chart(ctxbarhr, {
          type: 'bar',
          data: {
              labels: ["1st Grading", "2nd Grading", "3rd Grading", "4th Grading"],
              datasets: [{
                  label: 'Total',
                  data: [87,85,94,93],
                  backgroundColor: [
                       '#398CD5','#31D7F1','#2ACB4F','#ADF73D', '#00ff00', '#00ff80',
                                 '#00ffff','#0080FF','#0000ff','#8000ff', '#ff00ff', '#ff0080',
                  ],
                  borderColor: [
                       '#398CD5','#31D7F1','#2ACB4F','#ADF73D', '#00ff00', '#00ff80',
                                 '#00ffff','#0080FF','#0000ff','#8000ff', '#ff00ff', '#ff0080',
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
                          display: false,
                          text: 'No. of Employee per Department'
                      },
                legend: { 
                          display: false 
                        }
          }
      });

      var myDnChart = new Chart(ctxdn,{
          type: 'doughnut',
          data: {
                labels: ['Assets','Checked-In','Checked-Out','For Disposal'],
                datasets: [{
                    data: [21, 6, 15, 10],
                    backgroundColor: [
                      '#2980b9','#16a085','#e74c3c','#8e44ad'
                    ],
                    borderColor: [
                      '#2980b9','#16a085','#e74c3c','#8e44ad'
                    ],
                    hoverBackgroundColor: [
                      '#2980b9','#16a085','#e74c3c','#8e44ad'
                    ],
                    hoverBorderColor: [
                      '#2980b9','#16a085','#e74c3c','#8e44ad'
                    ],
                    hoverBorderWidth: 5,
                    borderWidth: 1
                }], 
                // These labels appear in the legend and in the tooltips when hovering different arcs
               
            }
      });

       var myDnChart = new Chart(ctxlf,{
          type: 'doughnut',
          data: {
                labels: ['Lost','Found','Returned','Donated'],
                datasets: [{
                    data: [30, 2, 4, 8],
                    backgroundColor: [
                      '#2980b9','#16a085','#e74c3c','#8e44ad'
                    ],
                    borderColor: [
                      '#2980b9','#16a085','#e74c3c','#8e44ad'
                    ],
                    hoverBackgroundColor: [
                      '#2980b9','#16a085','#e74c3c','#8e44ad'
                    ],
                    hoverBorderColor: [
                      '#2980b9','#16a085','#e74c3c','#8e44ad'
                    ],
                    hoverBorderWidth: 5,
                    borderWidth: 1
                }], 
                // These labels appear in the legend and in the tooltips when hovering different arcs
               
            }
      });

