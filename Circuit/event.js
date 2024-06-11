let currentTarget;

function setEventListener() {
    "strict mode";

    const compList = $("canvas.comp");
    const compInputGroup = $("#input_list tr");
    const inputList = $("#input_list td.value");

    for (let i=0; i<compList.length; i++) {
        const comp = compList[i];
        const group = compInputGroup[i];
        const input = inputList[i];

        const id = group.id;
        
        $(comp).on("click", function () {
            currentTarget = id;
            getData();
        });

        $(input).on("click", function () {
            currentTarget = id;
            getData();
        });
    }
}

function getData() {
    "strict mode";

    const message = `Valeur de ${currentTarget}:`
    getInput(message);
}

function setData() {
    value[currentTarget] = $("#input").val();
    checkData();
    outputData();
    isDataComplete();
}

function checkData() {
    "strict mode";

    const data = value[currentTarget];
    if (Number(data) > 0)
        value[currentTarget] = Number(data)
    else
        value[currentTarget] = "0";
}

function outputData() {
    "strict mode";

    const group = `#input_list tr#${currentTarget}`;
    const input = `${group} > td.value`
    $(input).html(value[currentTarget]);

    if (value[currentTarget] != "0") {
        $(group).removeClass("incomplet");
        $(group).addClass("complet");
    } else {
        $(group).removeClass("complet");
        $(group).addClass("incomplet");
    }
}

function isDataComplete() {
    "strict mode";
    
    let complete = true;

    for (const key in value) {
        if (complete)
            complete = (value[key] != 0);
    }

    if (complete)
        calcul();
}
