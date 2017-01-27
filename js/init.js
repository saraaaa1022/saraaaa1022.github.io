(function($) {
    $(document).ready(function() {
        $(document).on('scroll', onScroll);
        var bg = $('body');

        $(window).resize('resizeBackground');

        function resizeBackground() {
            bg.height($(window).height());
        }

        resizeBackground();

        $('.fixed-nav').slicknav({
            label: '',
            duration: 500,
            easingOpen: 'easeInOutQuint',
            easingClose: 'easeInOutQuint',
            closeOnClick: true,
            prependTo: '#navbar'
        });
        $('.slicknav_btn').slicknav('toggle');

        var navHeight = - $('#navbar').height();

        if ($(window).width() <= 800) {
            navHeight = 0;
        }

        $('body').plusAnchor({
            easing: 'easeInOutQuint',
            offsetTop: navHeight,
            speed:  750
        });
    });
})(jQuery);

function onScroll(event){
    var scrollPos = $(document).scrollTop() + 51;
    $('#navbar ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (scrollPos >= 51) {
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#navbar ul li a').removeClass("active");
                currLink.parent().addClass("active");
            }
            else{
                currLink.parent().removeClass("active");
            }
        }
    });
}

