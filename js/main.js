$(function () {
    // set year for copyright
    var year = (new Date()).getFullYear();
    $("#copyright-year").html(year);
});

var App = new Vue({
    el : '#app',
    data : {
        calendarData : [],
        faqData : [],
        ratesData : []
    },
    mounted() {
        var self = this;
        $.getJSON('/three_mile/data/calendar.json', function(data) {
            self.calendarData = data;
        });
        $.getJSON('/three_mile/data/faq.json', function(data){
            self.faqData = data;
        });
        $.getJSON('/three_mile/data/rates.json', function(data){
            self.ratesData = data;
        });

    }
});
