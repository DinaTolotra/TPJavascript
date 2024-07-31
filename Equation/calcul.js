function calcul() {
    if ( a != 0 ) {
        degree2();
    } else if ( b != 0) {
        degree1();
    } else {
        degree0();
    }
}

function degree0() {
    let deltaElem = "#delta .value";
    let x1Elem = "#x1 .value";
    let x2Elem = "#x2 .value";

    $(deltaElem).html("Invalid");
    $(x1Elem).html("Invalid");
    $(x2Elem).html("Invalid");
    $(deltaElem).addClass("invalid");
    $(x1Elem).addClass("invalid");
    $(x2Elem).addClass("invalid");

    $(deltaElem).removeClass("unset");
    $(x1Elem).removeClass("valid");
    $(x2Elem).removeClass("valid");
    $(deltaElem).removeClass("valid");
    $(x1Elem).removeClass("unset");
    $(x2Elem).removeClass("unset");
}

function degree1() {
    let deltaElem = "#delta .value";
    let x1Elem = "#x1 .value";
    let x2Elem = "#x2 .value";
    
    x = (-c) / b;

    $(deltaElem).html("N'éxiste pas")
    $(x1Elem).html(x.toFixed(3));
    $(x2Elem).html("N'éxiste pas")
    $(deltaElem).addClass("unset");    
    $(x1Elem).addClass("valid");
    $(x2Elem).addClass("unset");

    $(deltaElem).removeClass("invalid");
    $(x1Elem).removeClass("invalid");
    $(x2Elem).removeClass("invalid");
    $(deltaElem).removeClass("valid");
    $(x1Elem).removeClass("unset");
    $(x2Elem).removeClass("valid");
}

function degree2() {
    let deltaElem = "#delta .value";
    let x1Elem = "#x1 .value";
    let x2Elem = "#x2 .value";

    let delta = (b * b) - (4 * a * c);
    
    if (delta > 0) {
        x1 = (-b - Math.sqrt(delta)) / 2 * a;
        x2 = (-b + Math.sqrt(delta)) / 2 * a;
        
        $(deltaElem).html(delta.toFixed(3));
        $(x1Elem).html(x1.toFixed(3));
        $(x2Elem).html(x2.toFixed(3));
        $(deltaElem).addClass("valid");
        $(x1Elem).addClass("valid");
        $(x2Elem).addClass("valid");

        $(deltaElem).removeClass("unset");
        $(x1Elem).removeClass("invalid");
        $(x2Elem).removeClass("invalid");
        $(deltaElem).removeClass("invalid");
        $(x1Elem).removeClass("unset");
        $(x2Elem).removeClass("unset");

        $("#remark").html("Deux solution distinct");
    } else if (delta == 0) {
        x1 = (-b) / 2 * a;
        $(deltaElem).html(delta.toFixed(3));
        $(x1Elem).html(x1.toFixed(3));
        $(x2Elem).html("");
        $(deltaElem).addClass("unset");
        $(x1Elem).addClass("valid");
        $(x2Elem).addClass("unset");

        $(deltaElem).removeClass("valid");
        $(x1Elem).removeClass("invalid");
        $(x2Elem).removeClass("invalid");
        $(deltaElem).removeClass("invalid");
        $(x1Elem).removeClass("unset");
        $(x2Elem).removeClass("valid");

        $("#remark").html("Solution unique");
    } else if (delta < 0) {
        $(deltaElem).html(delta.toFixed(3));
        $(x1Elem).html("");
        $(x2Elem).html("");
        $(deltaElem).addClass("unset");
        $(x1Elem).addClass("invalid");
        $(x2Elem).addClass("invalid");

        $(deltaElem).removeClass("valid");
        $(x1Elem).removeClass("valid");
        $(x2Elem).removeClass("valid");
        $(deltaElem).removeClass("invalid");
        $(x1Elem).removeClass("unset");
        $(x2Elem).removeClass("unset");

        $("#remark").html("Pas de solution");
    }
}