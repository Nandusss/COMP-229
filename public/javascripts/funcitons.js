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

export {achieveTypeEffect};