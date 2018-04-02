
$(document).ready(function() {
    var oTable = $('#grades').DataTable({
        autoFill: {
            columns: ':not(:first-child)'
        },
        "orderCellsTop": false,
        "searchHighlight": true,
        "ordering": false
    });

    $('#search').keyup(function() {
        oTable.search($(this).val()).draw();
    });
    $(".dataTables_filter").hide();
    oTable.on('order.dt search.dt',
        function() {
            oTable.column(0, { search: 'applied', order: 'applied' }).nodes().each(
                function(cell, i) {
                    cell.innerHTML = i + 1;
                });
        }).draw();


    $('#grades').DataTable({
        autoFill: {
            columns: ':not(:first-child)'
        },
        "orderCellsTop": false,
        "searchHighlight": true,
        "ordering": false,
        "filter": false

    });


    $('#grades1').DataTable({
        autoFill: {
            columns: ':not(:first-child)'
        },
        "orderCellsTop": false,
        "searchHighlight": true,
        "bLengthChange": false,
        "bPaginate": false,
        "info": false,
        "ordering": false,
        "filter": false
    });
});