$(document).ready(function(){
    var $counter = $('.counter');
    var $accordion = $('.panel');

    $counter.appear();
    $(document.body).on('appear', '.counter', function () {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({countNum: $this.text()}).delay(200).animate({
                countNum: countTo
            },
            {
                duration: 1200,
                /*easing: 'linear',*/
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            }
        );
    });

    $accordion.appear();
    $(document.body).on('appear', '.panel', function () {
        $(this).each(function () {
            $(this).addClass('fadeInLeft');
        });
    });
});