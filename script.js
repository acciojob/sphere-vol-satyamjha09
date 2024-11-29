function volume_sphere() {
    // Prevent form submission
    event.preventDefault();

    // Retrieve the radius value from the input field
    const radiusInput = document.getElementById("radius").value;

    // Parse the radius input as a float
    const radius = parseFloat(radiusInput);

    // Check if the radius is valid (non-negative number)
    if (isNaN(radius) || radius < 0) {
        // If invalid, set the volume output to "NaN"
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Calculate the volume of the sphere: V = (4/3)πr³
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round the volume to four decimal places
    const roundedVolume = volume.toFixed(4);

    // Display the calculated volume in the "volume" field
    document.getElementById("volume").value = roundedVolume;
}

// Attach the function to the form's `onsubmit` event
window.onload = function () {
    document.getElementById("MyForm").onsubmit = volume_sphere;
};
