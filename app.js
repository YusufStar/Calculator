start = true

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