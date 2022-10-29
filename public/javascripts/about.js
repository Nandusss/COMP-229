/* *
 * about.js
 * Nandagopan Dilip
 * 301166925
 * 08/10/2022
 */

import { showWordByWord } from "./functions.js"; //importing the typing fuction

//loading functions when the home page loads
if(window.addEventListener)
{
    window.addEventListener("load", main, false);
}
else if(window.attachEvent)
{
    window.attachEvent("onload", main);
}

function main() {
    var msgs =  "Hi. I am Nandagopan Dilip. Currently enrolled at Centennial College in the program Software Engineering Technology - Artificial Intelligence program. \n \n I have skills in the following fields: \n \t Software Engineering \n \t Web Developement \n \t Programming \n"
    var speed = 250;
    var typeArea = document.getElementById("self-points");
    showWordByWord(typeArea, msgs, speed);
}