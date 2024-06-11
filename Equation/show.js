function Show(){
    const element = document.getElementById('myelement');
    element.style.display = 'block';
    setTimeout(() => {
        element.classList.add('visible');
    }, 1000);
}

function show2(){
    var elem = document.getElementById('element');
    elem.style.display = "block";
    setTimeout(() => {
        element.classList.add('invisible')
    }, 10);
}
function showelem(){
    const carddy = document.getElementById('caddy');
    carddy.style.display = "block";
    requestAnimationFrame(()=> {
        carddy.classList.add('masquer');
        console.log("haha")
    })
}