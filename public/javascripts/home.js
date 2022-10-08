/* 
 * home.js
 * Nandagopan Dilip
 * 301166925
 * 08/10/2022
 */

import { achieveTypeEffect } from "./funcitons.js"; //importing the typing fuction

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
    var msg = 'IMAGINATIONS  MADE  ALIVE';
    var speed = 80;
    var textArea = document.getElementById("typer");
    achieveTypeEffect(textArea, msg, speed);
}
