var screen = document.getElementById('screen');
function btnClick(value){
    screen.value += value;
}
function clearScreen(){
    screen.value="";
}
function findResult(){
    var result = eval(screen.value)
    screen.value = result;

}
function backspace() {
    screen.value = screen.value.slice(0, -1);
}
function SquareRoot() {
    let value = parseFloat(screen.value);
    if (value >= 0) {

        
        screen.value = Math.sqrt(value);
    } else {
    }
}


