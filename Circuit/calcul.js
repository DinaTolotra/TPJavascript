function calcul() {
    "strict mode";

    const Req = ( (value["R2"]*value["R3"]) / (value["R2"]+value["R3"]) ) + value["R1"] + value["R4"];
    const delta = (value["R2"]*value["R3"]) + (value["R1"]+value["R4"])*(value["R2"]+value["R3"]);

    result["I1"] = result["I4"] = value["E"] / Req;
    result["I2"] = value["E"]*value["R3"] / delta;
    result["I3"] = value["E"]*value["R2"] / delta;


    result["U1"] = value["R1"] * result["I1"];
    result["U2"] = value["R2"] * result["I2"];
    result["U3"] = value["R3"] * result["I3"];
    result["U4"] = value["R4"] * result["I4"];


    outputResult("I1");
    outputResult("I2");
    outputResult("I3");
    outputResult("I4");
    outputResult("U1");
    outputResult("U2");
    outputResult("U3");
    outputResult("U4");
}


function outputResult(id) {
    "strict mode";

    const group = `#output_list tr#${id}`;
    const output = `${group} > td.value`
    $(output).html(result[id].toFixed(3));
}
