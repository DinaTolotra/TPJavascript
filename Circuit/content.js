function generateContent() {
    "strict mode";
    i = 1;

    createWire($("canvas#main")[0]);
    createBattery($("canvas#E")[0]);
    for (const canvas of $("canvas.R")) {
        createResistor(canvas, `R${i++}`);
    }
    arrangeComponent($("canvas.comp"));

    generateDataList(
        $("#input_list"),
        ["E", "R1", "R2", "R3", "R4"]
    );
    generateDataList(
        $("#output_list"),
        [
            "I1", "I2", "I3", "I4",
            "U1", "U2", "U3", "U4", 
        ]
    );
}

function createWire(canvas) {
    "strict mode";

    const width = canvas.width = 420;
    const height = canvas.height = 240;
    const margin = 20;

    let ctx = canvas.getContext("2d");

    ctx.lineWidth = 1;

    const mainWireW = 2*(width-margin*2)/3;
    const mainWireH = height-margin*2;
    ctx.strokeRect(
        margin, margin,
        mainWireW,
        mainWireH
    );

    const subWireW = (width-margin*2)/3;
    const subWireH = height-margin*2;
    ctx.strokeRect(
        margin+mainWireW,
        margin,
        subWireW,
        subWireH
    );
}

function createBattery(canvas) {
    "strict mode";

    const width = canvas.width = 62;
    const height = canvas.height = 30;
    const marginLR = 25;
    const marginUD = 0;
    const diff = 5;

    let ctx = canvas.getContext("2d");

    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(0, height/2);
    ctx.lineTo(marginLR, height/2);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(marginLR, marginUD);
    ctx.lineTo(marginLR, height-marginUD);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(width-marginLR, marginUD+diff);
    ctx.lineTo(width-marginLR, height-marginUD-diff);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(width-marginLR, height/2);
    ctx.lineTo(width, height/2);
    ctx.stroke();
    ctx.closePath();
}

function createResistor(canvas, label) {
    "strict mode";

    const width = canvas.width = 62;
    const height = canvas.height = 22;
    const marginLR = 10;
    const marginUD = 0;

    let ctx = canvas.getContext("2d");

    ctx.lineWidth = 5;
    ctx.fillStyle = "#000";

    ctx.strokeRect(
        marginLR,
        marginUD,
        width-marginLR*2,
        height-marginUD*2
    );

    ctx.beginPath();
    ctx.moveTo(0, height/2);
    ctx.lineTo(marginLR, height/2);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(width-marginLR, height/2);
    ctx.lineTo(width, height/2);
    ctx.stroke();
    ctx.closePath();

    ctx.font  = "16px Arial";
    ctx.fillText(label, width/2 - 8, height/2 + 6);
}

function arrangeComponent() {
    "strict mode";

    const E = $("canvas#E");
    $(E).css("left", -11);
    $(E).css("top", 95);
    $(E).css("rotate", "90deg");

    const R1 = $("canvas#R1");
    $(R1).css("left", 120);
    $("canvas#R1").css("top", 8);

    const R2 = "canvas#R2";
    $(R2).css("left", 242);
    $(R2).css("top", 95);
    $(R2).css("rotate", "90deg");

    const R3 = "canvas#R3";
    $(R3).css("left", 368);
    $(R3).css("top", 95);
    $(R3).css("rotate", "90deg");

    const R4 = "canvas#R4";
    $(R4).css("left", 120);
    $(R4).css("top", 208);
}

function generateDataList(container, list) {
    "strict mode";

    list.forEach(elem => {
        let unit;
        switch (elem[0]) {
            case 'E':        
            case 'U':
                unit = "V"
                break;
            case 'R':
                unit = "&Omega;"
                break;
            case 'I':
                unit = "A"
                break;
        }

        const row = $(`<tr id="${elem}" class="incomplet"></tr>`);
        const stateElem = $(`<td class="state">&blacktriangleright;&nbsp;</td>`)
        const labelElem = $(`<td class="label">${elem}</td><td>:<td>`);
        const valueElem = $(`<td class="value">0</td>`);
        const unitElem = $(`<td class="unit">${unit}</td>`);

        container.append(row);
        row.append(stateElem);
        row.append(labelElem);
        row.append(valueElem);
        row.append(unitElem)
    });
}


function getInput(message) {
    const popup = $("#bg");
    $(popup).css("display", "flex");
    $("#bg label").html(message);
    $("#bg input").focus();
    $("#bg input").val("");
}


function hidePopup() {
    const popup = $("#bg");
    $(popup).css("display", "none");
    currentTarget = undefined;
}