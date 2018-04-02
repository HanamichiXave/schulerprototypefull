
         $(document).ready(function(){
           var oTable = $('#myTable').DataTable({
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
