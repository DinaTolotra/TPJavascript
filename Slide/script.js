let waitDelay = 1000;   //  ms
let slideDelay = 300;   //  ms
let positionLeft = -300;
let sliding = true;
const imgCount = 8;
let index = 0;
let watchTimer;
let slideTimer;

$(document).ready(function () {
    createElem();
    setEvent();
    hideBtn($("#pauseBtn"))
});


function setEvent() {
    $("#setupButton").on("click", function() {
        $("#setupDialog").dialog("open");
    });

    $("#startBtn").on("click", function() {
        start();
    });

    $("#pauseBtn").on("click", function() {
        stop();
    });

    $("#previousBtn").on("click", function() {
        previous();
    });

    $("#nextBtn").on("click", function() {
        next();
    });
}


function createElem() {
    let container = $("#imgContainer");
    let img = $("<img></img>");
    let src = `Res/${imgCount}.jpg`;
    img.addClass("image");
    img.attr("src", src);
    container.append(img);
    
    for (i = 1; i <= imgCount; i++) {
        let img = $("<img></img>");
        let src = `Res/${i}.jpg`;
        img.addClass("image");
        img.attr("src", src);
        container.append(img);
    }
}


function start() {
    sliding = true;
    hideBtn($("#startBtn"));
    showBtn($("#pauseBtn"));
    wait();
}


function stop() {
    sliding = false;
    showBtn($("#startBtn"));
    hideBtn($("#pauseBtn"));
}


function previous() {
    stop();
    positionLeft -= positionLeft%300;
    positionLeft += 300;
    if (positionLeft == 0)
        positionLeft = -300*imgCount;
    refreshPosition();
    refreshIndex();
}


function next() {
    stop();
    positionLeft -= positionLeft%300;
    positionLeft -= 300;
    if (positionLeft == -300*imgCount)
        positionLeft = 0;
    refreshPosition();
    refreshIndex();
}


function refreshIndex() {
    index = Math.ceil(-positionLeft / 300);
    index = index? index: imgCount;
    $("#index").html(index);
}


function refreshPosition() {
    let container = $("#imgContainer");
    container.css("left", `${positionLeft}px`);
}


function wait() {
    if (!sliding) return;

    refreshIndex();

    watchTimer = setTimeout(() => {
        if (-positionLeft==300*imgCount)
            positionLeft = 0;

        slide();
    }, waitDelay);
}

function slide() {
    if (!sliding) return;

    slideTimer = setInterval(() => {
        positionLeft -= 3;
        refreshPosition();

        if (-positionLeft%300==0) {
            clearInterval(slideTimer);
            wait();
        }
    } , slide/300);
}