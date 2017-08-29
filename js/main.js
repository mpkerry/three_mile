$(function () {
    // set calendar
    $.get('/three_mile/data/calendar.json', function(data) {
        var calendar = data;
        $.each(calendar.weeks, function(key, week){
            $('#calendar-list').append('<tr><th>' + key + '</th><td> ' + week + '</td></tr>');
        });
        $('#calendar-year').html(calendar.year);
        $('#rates-calendar-year').html(calendar.year);
    });

    // set FAQs
    $.get('/three_mile/data/faq.json', function(data) {
        var faqs = data;
        var num = 0;
        $.each(faqs, function(section, questions){
            $('#faq-accordion-div').append('<br/><h4>' + section + '</h4>');
            var accordion = $('<div>').attr('id','faq-accordion').attr('data-children', '.questions');
            accordion.append('<hr>');
            $.each(questions, function(q,a) {
                accordion.append('<div class="questions">');
                accordion.append('<a data-toggle="collapse" data-parent="#faq-accordion" href="#faq-accordion'+num+'" aria-expanded="false" aria-controls="faq-accordion'+num+'">'+ q + '? ' + '</a>');
                accordion.append('<div id="faq-accordion'+num+'" class="collapse" role="tabpanel"><p class="mb-3">'+a + '</p></div></div>');
                accordion.append('<hr>');
                num++;
            });
            $('#faq-accordion-div').append(accordion);
        });
    });

    // set year for copyright
    var year = (new Date()).getFullYear();
    $("#copyright-year").html(year);
});

