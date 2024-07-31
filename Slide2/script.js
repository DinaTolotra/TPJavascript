const imgCount = 8;
let current = 1;

$(document).ready(function () {
    setInterval(() => {
        increment();
        display();
    }, 1000);
});


function increment() {
    current++;
    if (current > imgCount) current = 1;
}


function display() {
    let img = $("img");
    let src = `Res/${current}.jpg`;
    $(img).attr("src", src);
}