let a, b, c, x1, x2;
let target;
let elem;

function setInputEvent(elem) {
    $(elem).on("click", function() {
        target = $(elem).html();
        $(".dialog#input").dialog("open");
    });
}


$(document).ready(function () {
    $.each($(".coeff"), function (i, val) { 
        setInputEvent(val);
    });

    $("button#calc").on("click", function() {
        calcul();
    });

    elem = {
        delta: $("#delta .val"),
        x1: $("#x1 .val"),
        x2: $("#x2 .val")
    };
});
