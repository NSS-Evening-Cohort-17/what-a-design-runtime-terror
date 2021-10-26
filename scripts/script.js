var firstsec = document.getElementById('f');
var secondsec = document.getElementById('s');
document.onscroll = function scroll() {
    secondsec.scrollIntoView({behavior: "smooth"});
}