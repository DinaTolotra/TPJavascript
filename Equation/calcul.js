function calcul() {
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
    } else if (delta == 0) {
        x1 = (-b) / 2 * a;
        $(deltaElem).html(delta.toFixed(3));
        $(x1Elem).html(x1.toFixed(3));
        $(deltaElem).addClass("unset");
        $(x1Elem).addClass("valid");
        $(x2Elem).addClass("unset");
    } else if (delta < 0) {
        $(deltaElem).html(delta.toFixed(3));
        $(deltaElem).addClass("invalid");
        $(x1Elem).addClass("invalid");
        $(x2Elem).addClass("invalid");
    }
}