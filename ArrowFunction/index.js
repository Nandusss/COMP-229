var hello;

hello = () => {
    document.getElementById("demo").innerHTML += "Hello this button worked";
}

//The window object calls the function:
window.addEventListener("load", hello);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);