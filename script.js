// script.js
document.getElementById('routeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const vehicleType = document.getElementById('vehicleType').value;
    const fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
    const destination = document.getElementById('destination').value;

    document.getElementById("calculateRouteBtn").addEventListener("click", function() {
        window.location.href = "optimalroute.html";  // Navigates to the page
    });
    

    // Mock route calculation and emissions data
    const distance = Math.floor(Math.random() * 100) + 1; // Random distance between 1 and 100 miles
    const emissions = (distance / fuelEfficiency) * 19.6; // CO2 emissions in pounds (approximation)

    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p><strong>Vehicle Type:</strong> ${vehicleType}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Distance:</strong> ${distance} miles</p>
        <p><strong>Estimated Emissions:</strong> ${emissions.toFixed(2)} lbs of CO2</p>
    `;
});