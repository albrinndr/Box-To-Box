function handleCheckboxChange() {
    var frCheckboxes = document.querySelectorAll('#size-number input[type="checkbox"]');
    var anDiv = document.getElementById('size-character');

    // Check if any checkbox in the "fr" div is selected
    var isChecked = Array.from(frCheckboxes).some(function (checkbox) {
        return checkbox.checked;
    });

    // Enable or disable the "an" div based on the checkbox state
    if (isChecked) {
        anDiv.style.pointerEvents = 'none'; // Disable the div
        anDiv.style.opacity = '0.5'; // Optional: Reduce the opacity to indicate it's disabled
    } else {
        anDiv.style.pointerEvents = 'auto'; // Enable the div
        anDiv.style.opacity = '1'; // Optional: Restore the original opacity
    }
}


function handleCheckboxChange1() {
    var frCheckboxes = document.querySelectorAll('#size-character input[type="checkbox"]');
    var anDiv = document.getElementById('size-number');

    // Check if any checkbox in the "fr" div is selected
    var isChecked = Array.from(frCheckboxes).some(function (checkbox) {
        return checkbox.checked;
    });

    // Enable or disable the "an" div based on the checkbox state
    if (isChecked) {
        anDiv.style.pointerEvents = 'none'; // Disable the div
        anDiv.style.opacity = '0.5'; // Optional: Reduce the opacity to indicate it's disabled
    } else {
        anDiv.style.pointerEvents = 'auto'; // Enable the div
        anDiv.style.opacity = '1'; // Optional: Restore the original opacity
    }
}