let a, b, c, x1, x2;
let target;

function setInputEvent(elem) {
    $(elem).on("click", function() {
        target = $(elem).attr("id");
        $(".dialog#input").dialog("open");
    });
}


function isInputValid(input) {
    if (Number(input))
        return true;
    return false;
}


function setValue(val) {
    let signe = "+";
    $(`#${target}`).html(Math.abs(val));

    if (val < 0)
    switch (target) {
        case "a":
            $(".sign").eq(0).html("-");
            break;
        case "b":
            $(".sign").eq(1).html("-");
            break;
        case "c":
            $(".sign").eq(2).html("-");
            break;
    };  

    switch (target) {
        case "a":
            a = val;
            break;
        case "b":
            b = val;
            break;
        case "c":
            c = val;
            break;
    };
}


$(document).ready(function () {
    $.each($(".coeff"), function (i, val) { 
        setInputEvent(val);
    });

    $("button#calc").on("click", function() {
        calcul();
    });
});
