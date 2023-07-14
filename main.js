let show = document.getElementById("show");
let buttons = document.querySelectorAll('.num');
let operator = document.querySelectorAll('.sign');

// Array to store button values
let buttonValue = [];
const operators = ['/', '*', '-', '+', '%'];
let expression = '';

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = this.textContent; // Get the text content of the clicked button
        if (value !== '=') {
            buttonValue.push(value); // Add the value to the buttonValue array
            show.innerHTML += value;
            expression = buttonValue.join('');
        }
        else if (value in operators) {
            let op2 = value;
            buttonValue.pop();
            let op1 = buttonValue.pop();
            buttonValue.push(op2);
            show.innerHTML += value;
            expression = buttonValue.join('');
        }
        else {
            console.log(expression);
            const result = eval(expression);
            show.innerHTML = result;
            expression = 0;
        }

    });
});



let clr = document.getElementById('del');
clr.addEventListener('click', () => {
    if (show.innerHTML != '') {
        show.innerHTML = '';
        buttonValue = []; // Clear the buttonValue array
    }
});

let back = document.querySelector('.back');
back.addEventListener('click', () => {
    if (buttonValue.length > 0) {
        buttonValue.pop(); // Remove the last element from the buttonValue array
        show.innerHTML = buttonValue.join(''); // Update the display
    }
});
