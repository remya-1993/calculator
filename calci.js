window.onload = function () {
    var screen = document.getElementById('screen');

    window.btnClick = function (value) {
        screen.value += value;
    };

 
    window.clearScreen = function () {
        screen.value = "";
    };

    window.findResult = function () {
        try {
            
            let result = eval(screen.value);
            if (result !== undefined) {
                screen.value = result;
            }
        } catch (error) {
            screen.value = "Error";
        }
    };

    window.backspace = function () {
        screen.value = screen.value.slice(0, -1);
    };

 
    window.SquareRoot = function () {
        let value = parseFloat(screen.value);
        if (!isNaN(value) && value >= 0) {
            screen.value = Math.sqrt(value);
        } else {
            screen.value = "Invalid";
        }
    };
};

