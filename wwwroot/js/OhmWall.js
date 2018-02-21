$("document").ready(function () {

    //DEFAULT Hides the elements
    $("#IdResistance").hide();
    $("#IdCurrent").hide();
    $("#IdElectricity").hide();

    //Shows/Hides the elements
    $("#Resistance").click(function () {
        if ($("#IdResistance").is(":visible")) {
            $("#IdResistance").hide();
        } else {
            $("#IdResistance").show();
        }
    })

    $("#Current").click(function () {
        if ($("#IdCurrent").is(":visible")) {
            $("#IdCurrent").hide()
        } else {
            $("#IdCurrent").show();
        }
    })


    $("#Electricity").click(function () {
        if ($("#IdElectricity").is(":visible")) {
            $("#IdElectricity").hide()
        } else {
            $("#IdElectricity").show();
        }
    })


});

//$.ajax({
//    type: "GET",
//    url:@URL()
//succes: function (hello) {
//    $("p").show(hello);
//}

//})
