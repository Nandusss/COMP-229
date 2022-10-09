/* 
 * fuctions.js
 * Nandagopan Dilip
 * 301166925
 * 08/10/2022
 */

//typing effect function
function achieveTypeEffect(element, msg, speed, i=0) {
    
    typeIt();

    //this will show the msg with a delay in between each letters, achieving a typing effect
    function typeIt(){
        if (i < msg.length) {
            element.innerHTML += msg.charAt(i);
            i++;
            setTimeout(typeIt, speed);
        }
    }
}

//create bullet points to a list area
function showWordByWord(element, msgs, speed, i=0) {
    var splitedStr = msgs.split(" ");

    typeIt();
    
    function typeIt(){
        if (i < splitedStr.length) {

            //converting newline chars to <br>
            if(splitedStr[i] == "\n") {
                splitedStr[i] = "<br/>"
            }

            //conveting tabspace char to &emsp;
            if(splitedStr[i] == "\t") {
                splitedStr[i] = "&emsp;"
            }

            element.innerHTML += splitedStr[i] + " ";;
            i++;
            setTimeout(typeIt, speed);
        }
    }
}

export {achieveTypeEffect, showWordByWord};