var hello;

hello = () => {
    document.getElementById("demo").innerHTML += "Hello. ";
}

//The window object calls the function:
window.addEventListener("load", hello);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

//A button object calls the function:
document.getElementById("btn2").addEventListener("click", () => {
    document.getElementById("demo").innerHTML += "Hello 2. ";
});