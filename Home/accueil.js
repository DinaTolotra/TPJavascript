const container = document.querySelector("h2");
const msg = "Bienvenu dans notre projet en JavaScript!";
var len = 0;

let timer = setInterval(() => {
    container.innerHTML = msg.slice(0, len);
    if (len == msg.length)
        clearInterval(timer)
    len++;
}, 70);