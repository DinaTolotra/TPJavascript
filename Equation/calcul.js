function calcul() {
    var delta = (b * b) - (4 * a * c);

    $(elem[delta]).html(delta);

    if (delta > 0) {
        x1 = (-b - Math.sqrt(delta)) / 2 * a;
        x2 = (-b + Math.sqrt(delta)) / 2 * a;
        elem[x1].html(x1);
        elem[x2].html(x2);
        $(elem[delta]).addClass(".success");
        $(elem[x1]).addClass(".success");
        $(elem[x2]).addClass(".success");

    } else if (delta == 0) {
        x1 = (-b) / 2 * a;
        elem[x1].html(x1);
        $(elem[delta]).addClass(".unset");
        $(elem[x1]).addClass(".success");
    } else {
        $(elem[delta]).addClass(".warning");
        console.log("hello");
    }
}