
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");

sun.onclick = function () {
    sun.style.display = "none"
    moon.style.display = "block"

    let port = document.getElementById("port");
    if (port.getAttribute("href") == "ctail.css") {
        port.href = "qora.css";
    } else {
        port.href = "ctail.css"
    }

}
moon.onclick = function () {
    sun.style.display = "block"
    moon.style.display = "none"
    if (port.getAttribute("href") == "qora.css") {
        port.href = "ctail.css";
    } else {
        port.href = "qora.css"
    }

}