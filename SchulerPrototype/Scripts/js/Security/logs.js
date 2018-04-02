$(document).ready(function () {
    
    function logInit() {
        $('.summary').show();
        $('.overall').hide();
        $('.log-toggle').text('OVERALL LOG');
    }

    $(".log-toggle").click(function () {
        if($(this).text() == 'OVERALL LOG'){
            $(".summary").hide();
            $(".overall").show();
            $('.log-toggle').text('SUMMARY');
        } else {
            logInit();
        }
    });
    $('.btn-log-detail').click(function () {
        logInit();
    });
    
    logInit();
});