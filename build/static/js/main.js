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



$('#pagepiling').pagepiling({
    anchors: ['home', 'services', 'team', 'skills', 'work', 'blog', 'contact'],
    menu: '#myMenu'
});