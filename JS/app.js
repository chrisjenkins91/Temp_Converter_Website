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

//Getting the conversion type the user entered
let conversionType = document.getElementById("conversionType").value;
console.log(conversionType)

//Grabbing the temperature value entered by the user
let tempInput = document.getElementById("tempInput").value;
console.log(tempInput)

function tempConverter(){

    let convertedTemp = ""; //Created a variable to store the result

    // Used if statement to check the type of conversion to use & do the math
    if (conversionType === "CtoF") {
        convertedTemp = (tempInput * 9/5) + 32
    } else if(conversionType === "FtoC") {
        convertedTemp = (tempInput - 32) * 5/9
    } else if(conversionType === "CtoK") {
        convertedTemp = tempInput + 273.15
    } else if(conversionType === "KtoC") {
        convertedTemp = tempInput - 273.15
    } else {
        confirm("This is an invalid input..")
    }
    document.getElementById("result").innerText = convertedTemp;
}





//* Event Handling:
//* Implement event listeners that trigger the conversion when the user interacts with the page (e.g., clicking the "Convert" button).

//* Result Display:
//* Update the result area of the page with the converted temperature.

//! 5. Bonus Features (Optional)

//* Input Validation: Ensure that the user inputs valid temperature values.
//* Unit Conversion Validation: Prevent unnecessary conversions, such as converting from Celsius to Celsius.
//* Additional Features: Consider adding features like converting to multiple units simultaneously or a reset button to clear the inputs and results.