/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


//Calculations of Values
$(document).ready(function () {
    $("button").click(function () {
        //Variables that get the values 
        let FirstStrip = $("select").eq(0).val();
        let SecondStrip = $("select").eq(1).val();
        let Multiplier = $("select").eq(2).val();
        let Tolerance = $("select").eq(3).val();

        //Variables that calculate the values
        let Resistance = FirstStrip.concat(SecondStrip) * Multiplier;
        let CalculationOfTolerance = Resistance * Tolerance
        let Minimum = Resistance - CalculationOfTolerance;
        let Maximum = Resistance + CalculationOfTolerance;

        //Form field display 
        $("input").eq(0).val(Resistance);
        $("input").eq(1).val(Tolerance);
        $("input").eq(2).val(Minimum);
        $("input").eq(3).val(Maximum);

    })

});

//THIS WILL BE ADDED LATER IN DEVELOPMENT
    // $.ajax({
        //     type: "POST",
        //     url: "@Url.Action('ColorCode' , 'Calculators')",
        //     data:
        //      FirstStrip,
        //     SecondStrip,
        //     Multiplier,
        //     Tolerance
        // })