(function () {
    var i, e, d = document, s = "script"; i = d.createElement("script"); i.async = 1; i.charset = "UTF-8";
    i.src = "https://cdn.curator.io/published/83f6934d-7471-47e2-a31c-1d67ff64f2fe.js";
    e = d.getElementsByTagName(s)[0]; e.parentNode.insertBefore(i, e);
})();


window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("header").style.visibility = "visible";
            document.getElementById("header").style.opacity = "1";
            document.getElementById("header").style.transition = "opacity 0.5s ease-in";
        } else {
            document.getElementById("header").style.visibility = "hidden";
            document.getElementById("header").style.opacity = "0";
            document.getElementById("header").style.transition = "none";
        }
    }