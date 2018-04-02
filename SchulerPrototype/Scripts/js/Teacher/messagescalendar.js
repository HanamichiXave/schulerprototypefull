
         $(document).ready(function(){
           var oTable = $('#myTable').DataTable({
             "orderCellsTop": false,
             "searchHighlight" : true,
             "ordering": false,

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

        $('#compose').on('show.bs.modal', function () {
           jQuery(document).ready(function() {   
          $('#recipient').tokenfield({
            autocomplete: {
              source: ['mayson@simplevia.com', 'xavier@simplevia.com', 'benson@simplevia.com', 'ivan@simplevia.com', 'cj@simplevia.com', 'ave@simplevia.com', 'bravo@simplevia.com', 'bea@simplevia.com', 'jham@simplevia.com', 'elli@simplevia.com'],
              delay: 1
            },
            showAutocompleteOnFocus: true
          });
          $('#cc').tokenfield({
            autocomplete: {
              source: ['mayson@simplevia.com', 'xavier@simplevia.com', 'benson@simplevia.com', 'ivan@simplevia.com', 'cj@simplevia.com', 'ave@simplevia.com', 'bravo@simplevia.com', 'bea@simplevia.com', 'jham@simplevia.com', 'elli@simplevia.com'],
              delay: 1
            },
            showAutocompleteOnFocus: true
          });
        });
        })

          $(document).ready(function() {
            
            $('#schooleventcalendar').fullCalendar({
              height: 415,
              header: {
                left: 'prev',
                center: 'title',
                right: 'next',
              },
              defaultDate: '2017-11-12',
              navLinks: true, // can click day/week names to navigate views
              selectable: true,
              selectHelper: true,
              
              editable: false,
              eventLimit: true, // allow "more" link when too many events
              events: [
                {
                  title: 'All Saints Day',
                  start: '2017-11-01'
                },
                {
                  title: 'All Souls Day',
                  start: '2017-11-02'
                },
                {
                  title: 'Bonifacio Day',
                  start: '2017-11-30'
                },
                {
                  title: 'Maulid un-Nabi',
                  start: '2017-12-01'
                },
                {
                  title: 'Fest der unbefleckten Empfängnis',
                  start: '2017-12-08'
                },
                {
                  title: 'Christmas Eve',
                  start: '2017-12-24'
                },
                {
                  title: 'Christmas Day',
                  start: '2017-12-25'
                },
                {
                  title: 'Rizal Day',
                  start: '2017-12-30'
                },
                {
                  title: 'New Years Eve',
                  start: '2017-12-31'
                },
                {
                  title: 'New Year',
                  start: '2018-01-01'
                },
              ]
            });
            
          });

        $('.popover-markup>.trigger').popover({
            html: true,
            title: function () {
              return $(this).parent().find('.head').html();
            },
            content: function () {
              return $(this).parent().find('.content').html();
            }
        });