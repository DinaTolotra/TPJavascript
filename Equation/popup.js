$(".dialog#input").dialog({
    title: "Entrée",
    autoOpen: false,
    modal: false,
    buttons: [
        {
            text: "Ok",
            click: function() {
                let val = $(this).find("input").val();
                $(`#${target}`).find(".value").html(val);
                switch (target) {
                    case "a":
                        a = val;
                        break;
                    case "b":
                        b = val;
                        break;
                    case "c":
                        c = val;
                        break;
                }
                $(this).dialog("close");
            }
        }
    ],
    open: function() {
        let label = $(this).find("label");
        label.html(target);
    }
});