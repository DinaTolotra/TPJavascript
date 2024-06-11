function getvala() {
    var a = document.getElementById('a');
    var reponse = prompt("entrer la valeur de a");
    if (reponse == '') {
        a.innerHTML = 'a'
    } else {
        a.innerHTML = reponse
    };
    var vala = a.innerHTML;
    console.log(vala);


}
function getvalb() {
    var b = document.getElementById('b');
    var reponse = prompt("entrer la valeur de b");


    var plus = document.getElementById('signe1');
    if (reponse < 0) {
        plus.innerHTML = "";
    } else {
        plus.innerHTML = "+";
    }
    if (reponse == '') {
        b.innerHTML = 'b'
    } else {

        b.innerHTML = reponse
    }
    var valb = b.innerHTML;
    console.log(valb);

}
function getvalc() {
    var c = document.getElementById('c');
    var reponse = prompt("entrer la valeur de c");
    var moins = document.getElementById('signe2');
    if (reponse < 0) {
        moins.innerHTML = "";
    } else {
        moins.innerHTML = "+";
    }
    if (reponse == '') {
        c.innerHTML = 'c'
    } else {
        c.innerHTML = reponse
    }
    var valc = c.innerHTML;
    console.log(valc);

}
function calcul() {
    var vala = a.innerHTML;
    console.log(vala)
    var valb = b.innerHTML;
    console.log(valb);
    var valc = c.innerHTML;
    console.log(valc);
    var delta = (valb * valb) - (4 * vala * valc);
    console.log(delta);
    var x1, x2;
    var resultat1 = document.getElementById('sous_delta_egal0');
    var resultat2 = document.getElementById('solution12');
    var resultat3 = document.getElementById('solution13');
    var type1 = document.getElementById('delta_sup0');
    var type2 = document.getElementById('delta_egal0');
    var type3 = document.getElementById('delta_inferieur0');
    var valeur_delta1 = document.getElementById('delta1');
    var valeur_delta2 = document.getElementById('delta0');
    var valeur_delta3 = document.getElementById('delta');
    var refresh = document.getElementById('refresh');



    if (delta == 0) {
        x1 = (-valb) / (2 * vala);
        resultat1.innerHTML = x1;
        type2.style.display = "block"
        valeur_delta2.innerHTML = delta;
        refresh.style.display = "block";
        setTimeout(()=> {
            type2.classList.add('masquer3');
            refresh.classList.add('refreshMasquer');
        },10);


    } else if (delta > 0) {
        x1 = (-valb - Math.sqrt(delta)) / 2 * vala;

        x2 = (-valb + Math.sqrt(delta)) / 2 * vala;
        resultat2.innerHTML = x1;
        resultat3.innerHTML = x2;
        type1.style.display = "block"
        valeur_delta1.innerHTML = delta;
        refresh.style.display = "block"
        setTimeout(()=> {
            type1.classList.add('masquer');
            refresh.classList.add('refreshMasquer');
        }, 10)

    } else if (delta < 0) {
        type3.style.display = "block"
        valeur_delta3.innerHTML = delta;
        
        setTimeout(()=> {
            type3.classList.add('masquer2');
            refresh.classList.add('refreshMasquer');
        }, 10);


    } else {
        alert("veuillez entrer correctement les valeur de a, b et c");
        a.innerHTML = 'a';
        b.innerHTML = 'b';
        c.innerHTML = 'c';

    }
    if(refresh.style.display == "block" || type3.style.display == "block" ){
    document.querySelector(".hahaha").style.backgroundColor = "#000000a0";
    document.querySelector(".hahaha").style.filter = blur(100);}
    
     

}
function refresh() {
    document.location.reload();


}
