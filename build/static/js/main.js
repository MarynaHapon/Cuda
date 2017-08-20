    // navigation
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}

//document.getElementById("openNav").onclick = openNav
//document.getElementById("closeNav").onclick = closeNav


$(document).ready(function() {
    $('#pagepiling').pagepiling({
        anchors: ['home', 'services', 'team', 'skills', 'work', 'blog', 'contact'],
        menu: '#myMenu',
    });
});


    // progressbar
var bar1 = new ProgressBar.Circle(webDesign, {
    color: '#3c4761',
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
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
bar1.animate(0.90);


var bar2 = new ProgressBar.Circle(htmlCss, {
    color: '#3c4761',
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
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
bar2.animate(0.75);


var bar3 = new ProgressBar.Circle(graphicDesign, {
    color: '#3c4761',
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
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
bar3.animate(0.70);


var bar4 = new ProgressBar.Circle(uiUx, {
    color: '#3c4761',
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
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
bar4.animate(0.85);