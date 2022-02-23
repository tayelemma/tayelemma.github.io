
"use strict"
/*
Quesion 5. convert fahrenheit. 

   input:      temperature in Fahrenheit is a input
   output:     temperature in celcius is an output
   processing: to convert Fahrenheit to Celsius, subtract 32 from the temperature in Fahrenheit and multiply by 5/9
 */
function convertFahrenheit(tempInFahrenheit) {
    const tempInCelsius = 5 / 9 * (parseFloat(tempInFahrenheit) - 32);
    return tempInCelsius;
}
console.log("expect 0: ", convertFahrenheit(32));
console.log("expect -17.7778: ", convertFahrenheit(0));
console.log("expect 100: ", convertFahrenheit(212));
console.log("expect 37.7778: ", convertFahrenheit(100));