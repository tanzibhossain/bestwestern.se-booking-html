jQuery(document).ready(function($) {

    // Date Range Selector
    moment.locale(document.documentElement.lang.slice(0, -3));
    var start = moment();
    var end = moment().add(1, "days");

    function cb(start, end) {
        $("#booking-datepicker").html(start.format("D MMM") + " - " + end.format("D MMM"));
    }
    
    $("#booking-datepicker").daterangepicker({
        startDate: start,
        endDate: end,
        minDate: start,
        // autoApply: true,
        autoUpdateInput: true,
        locale: {
            format: "D MMM",
        }
    });

    $('#booking-datepicker').on('show.daterangepicker', function(ev, picker) {
        $("#startDate").val(picker.startDate.format('YYYY-MM-DD'));
        $("#endDate").val(picker.endDate.format('YYYY-MM-DD'));
    });

    $('#daterange').on('cancel.daterangepicker', function(ev, picker) {
        cb(start, end);
    });

    $('#booking-datepicker').on('apply.daterangepicker', function(ev, picker) {
        $("#startDate").val(picker.startDate.format('YYYY-MM-DD'));
        $("#endDate").val(picker.endDate.format('YYYY-MM-DD'));
    });
    
    cb(start, end);

    // Promo Validation
    $('#promoCode').blur(function(){
        if($(this).val()){
            $(this).attr('name', 'promoCode')
            $('<input type="hidden" id="ratePlan" name="ratePlan" value="PROMO">').insertBefore(this);
        }
        else {
            $(this).removeAttr('name');
            $("#ratePlan").remove();
        }
    });
    
});