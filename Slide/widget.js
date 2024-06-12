$("#waitDelaySpinner").spinner({
    min: 0,
    max: 5000
});


$("#slideDelaySpinner").spinner({
    min: 300,
    max: 5000
});


$("#setupDialog").dialog({
    title: "Paramètre vitesse",
    dialogClass: "no-close",
    autoOpen: false,
    draggable: false,
    modal: true,
    width: 400,
    buttons: [
        {
            text: "Cancel",
            class: "btn btn-outline-secondary",
            click: function() {
                $(this).dialog("close");
            }
        },
        {
            text: "Ok",
            class: "btn btn-primary",
            click: function() {
                let waitTemp = $("#waitDelaySpinner").spinner("value");
                let slideTemp = $("#slideDelaySpinner").spinner("value");
        
                if (waitTemp < 0 || slideTemp < 300) {
                    showAlert();
                    setTimeout(() => {
                        hideAlert();
                    }, 2000);
                } else {
                    waitDelay = waitTemp;
                    slideDelay = slideTemp;
                }

                $(this).dialog("close");
            }
        }
    ],

    open: function(event, ui) {
        $("#waitDelaySpinner").spinner("value", waitDelay);
        $("#slideDelaySpinner").spinner("value", slideDelay);
    }
});