//! Temp Convertor Website:

//? 1. Project Setup

//TODO Folder Organization: Create a new project folder and include the following files:
//TODO index.html for the HTML structure.
//TODO styles.css for any custom styles.
//TODO app.js for the JavaScript code.

//? 2. HTML Structure

//TODO Title: Create a title and a header for your temperature converter page.
//*TODO Input Fields:

//* Add an input field where users can enter a temperature value.
//* Include dropdown menus for selecting the temperature units (e.g., Celsius, Fahrenheit, Kelvin) for both the original and target units.
//* Buttons: Add a button that will trigger the conversion process.
//* Result Display: Include an area on the page where the conversion result will be displayed.

//? 3. Styling with Bootstrap

//* Responsive Design: Use Bootstrap's grid system to make your layout responsive.
//* Form Styling: Apply Bootstrap classes to style your input fields, dropdowns, and buttons.
//* Custom Styles: Optionally, add custom styles in your styles.css to enhance the look and feel of the page.


//? 4. JavaScript Logic

//* DOM Manipulation:
//* Select the necessary elements (e.g., input fields, dropdowns, buttons, result display) using JavaScript.

//* Conversion Functions:
//* Write functions that handle the conversion logic between Celsius, Fahrenheit, and Kelvin.

function tempConverter(){
    debugger
    // Created variables for the temp names.
    let farenheit = "Farenheit"
    let celsius = "Celsius"
    let kelvin = "Kelvin"
    //Grabbing the temperature value entered by the user
    let tempInput = document.getElementById("tempInput").value;

    //Getting the conversion type the user selected
    let conversionType = document.getElementById("conversionType").value;

    let convertedTemp = ""; //Created a variable to store the result
    // Used if statement to check the type of conversion to use & do the math
    if (conversionType === "CtoF") {
        convertedTemp = (tempInput * 9/5) + 32
        document.getElementById("result").innerText = "Your Converted Temperature: " + parseFloat(convertedTemp).toFixed(2) + " degrees " + farenheit
    } else if(conversionType === "FtoC") {
        convertedTemp = (tempInput - 32) * 5/9
        document.getElementById("result").innerText = "Your Converted Temperature: " + parseFloat(convertedTemp).toFixed(2) + " degrees " + celsius
    } else if(conversionType === "CtoK") {
        convertedTemp = parseFloat(tempInput).toFixed(2) + 273.15
        document.getElementById("result").innerText = "Your Converted Temperature: " + parseFloat(convertedTemp).toFixed(2) + " degrees " + kelvin
    } else if(conversionType === "KtoC") {
        convertedTemp = tempInput - 273.15
        document.getElementById("result").innerText = "Your Converted Temperature: " + parseFloat(convertedTemp).toFixed(2) + " degrees " + celsius
    } else if(conversionType === "FtoK") {
        convertedTemp = (tempInput - 32) * 5/9 + 273.15
        document.getElementById("result").innerText = "Your Converted Temperature: " + parseFloat(convertedTemp).toFixed(2) + " degrees " + kelvin
    } else if(conversionType === "KtoF"){
        convertedTemp = (tempInput - 273.15) * 9/5 + 32
        document.getElementById("result").innerText = "Your Converted Temperature: " + parseFloat(convertedTemp).toFixed(2) + " degrees " + farenheit
    } else {
        confirm("This is an invalid input..");
    };


    // Used an if statement to display an error if the user didn't enter a value

    if (tempInput === "") {
        confirm(`Please enter a number.`);//* Error checker prompt to enter a #
        document.getElementById("result").innerText = "";
    }
    // Display results after function is performed
    
    
}

// Created a variable for convertButton when clicked to perform a temp function
let convertButton = document.getElementById("convertButton");


// Added an EventListener to perform tempConverter() function when convertButton is "clicked"
convertButton.addEventListener("click", tempConverter)

//* Event Handling:
//* Implement event listeners that trigger the conversion when the user interacts with the page (e.g., clicking the "Convert" button).



//* Result Display:
//* Update the result area of the page with the converted temperature.

//! 5. Bonus Features (Optional)

//* Input Validation: Ensure that the user inputs valid temperature values.
//* Unit Conversion Validation: Prevent unnecessary conversions, such as converting from Celsius to Celsius.
//* Additional Features: Consider adding features like converting to multiple units simultaneously or a reset button to clear the inputs and results.