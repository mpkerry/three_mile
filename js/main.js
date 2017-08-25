$(function () {
    $.get('/three_mile/data/calendar.json', function(data) {
        var calendar = data;
        $.each(calendar.weeks, function(key, week){
            $('#calendar-list').append('<tr><th>' + key + '</th><td> ' + week + '</td></tr>');
        });
        $('#calendar-year').html(calendar.year);
    });
});
