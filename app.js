start = true

keyboardkeys = ["0","1","2","3","4","5","6","7","8","9",'+','-','*','/',]

display = document.getElementsByClassName("calculator__display")[0];

buttons = Array.from(document.querySelectorAll("button"));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        if(start == true) {
            display.innerText = ""
            start = false
        }
        switch(e.target.innerText) {
            case 'AC':
                display.innerText = "0"
                start = true
                break
            case '+/-':
                display.innerText = display.innerText*-1
                break
            case '=':
                display.innerText = eval(display.innerText)
                break
            default:
                display.innerText += e.target.innerText
        }
    });
});

document.addEventListener("keydown", (k) => {
    console.log(k)
    for(i = 0; i < keyboardkeys.length; i++) {
        if(k.key == keyboardkeys[i]) {
            if(start == true) {
                display.innerText = ""
                start = false
            }
            switch(k.key) {
                default:
                    display.innerText += k.key
            }
        } else if (k.key == 'Enter') {
            display.innerText = eval(display.innerText)
        } else if (k.key == "Backspace") {
            if(display.innerText) {
                console.log("first")
                display.innerText = display.innerText.slice(0,- 1)
                break
            }
        }
    }
});