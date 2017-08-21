$(document).ready(function() {
    var bar1 = new ProgressBar.Circle(webDesign, {
        color: '#3c4761',
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 900,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#aaa', width: 10 },
        to: { color: '#30bae7', width: 10 },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

        }
    });
    bar1.text.style.fontSize = '50px';


    var bar2 = new ProgressBar.Circle(htmlCss, {
        color: '#3c4761',
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 750,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#aaa', width: 10 },
        to: { color: '#d74680', width: 10 },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

        }
    });
    bar2.text.style.fontSize = '50px';


    var bar3 = new ProgressBar.Circle(graphicDesign, {
        color: '#3c4761',
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 700,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#aaa', width: 10 },
        to: { color: '#17c2a4', width: 10 },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

        }
    });
    bar3.text.style.fontSize = '50px';


    var bar4 = new ProgressBar.Circle(uiUx, {
        color: '#3c4761',
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        duration: 850,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#aaa', width: 10 },
        to: { color: '#eb7d4b', width: 10 },

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + '%');
            }

        }
    });
    bar4.text.style.fontSize = '50px';


    $('#pagepiling').pagepiling({
        anchors: ['home', 'services', 'team', 'skills', 'work', 'blog', 'contact'],
        menu: '#myMenu',

        afterLoad: function(anchorLink, index){

            if(anchorLink == 'skills'){
                bar1.animate(0.90);
                bar2.animate(0.75);
                bar3.animate(0.70);
                bar4.animate(0.85);
            }
        },

        onLeave: function(index, nextIndex, direction){

            if(index == 4 && direction =='down'){
                bar1.animate(0);
                bar2.animate(0);
                bar3.animate(0);
                bar4.animate(0);
            }

            else if(index == 4 && direction == 'up'){
                bar1.animate(0);
                bar2.animate(0);
                bar3.animate(0);
                bar4.animate(0);
            }
        }
    });


    $(function () {
        $(".portfolio-item").slice(0, 2).show();
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $("div:hidden").slice(0, 2).slideDown();
            if ($("div:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });

    $('a[href=#top]').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('.totop a').fadeIn();
        } else {
            $('.totop a').fadeOut();
        }
    });


});