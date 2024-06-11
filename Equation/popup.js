$(".dialog#input").dialog({
    title: "Entrée",
    autoOpen: false,
    modal: false,
    buttons: [
        {
            text: "Ok",
            click: function() {
                let val = $(this).find("input").val();
                if (isInputValid(val))
                    setValue(val);
                $(this).dialog("close");
            }
        }
    ],
    open: function() {
        let label = $(this).find("label");
        let input = $(this).find("input");
        label.html(target);
        input.val("");
    }
});