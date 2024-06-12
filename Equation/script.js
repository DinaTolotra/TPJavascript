let a, b, c, x, x1, x2;
let target;

function setInputEvent(elem) {
    $(elem).on("click", function() {
        target = $(elem).attr("id");
        $(".dialog#input").dialog("open");
    });
}


function isInputValid(input) {
    if (Number(input) || input == '0')
        return true;
    return false;
}


function setValue(val) {
    let signe = "+";
    $(`#${target}`).html(Math.abs(val));

    if (val < 0) 
        signe = "-";
    else
        signe = "+";

    switch (target) {
        case "a":
            if (signe == "+") signe = "";
            $(".sign").eq(0).html(signe);
            break;
        case "b":
            $(".sign").eq(1).html(signe);
            break;
        case "c":
            $(".sign").eq(2).html(signe);
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
