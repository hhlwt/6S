"use strict"

{
    // Циклы while и for
    while (true) {
        const isAgree = confirm('Do you wanna roll the dice?');

        if (!isAgree) break;

        const [firstDice, secondDice] = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        alert(`You have rolled ${firstDice} and ${secondDice}`);
    }


    const matrix = [
        [1, 1, 1, 1],
        [1, 0, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
    ];

    let zeroIndex;

    outer: for (let i = 0; i < matrix.length; i++) {
        const matrixRow = matrix[i];

        for (let j = 0; j < matrixRow.length; j++) {
            if (matrixRow[j] === 0) {
                zeroIndex = [i, j];
                break outer;
            }
        }
    }

    console.log(zeroIndex); // [1, 1]
}

{
    // Конструкция switch
    const format = prompt('Enter the output format');

    switch (format) {
        case 'json':
            alert('Processing json format...');
            break;

        case 'yaml':
            alert('Processing yaml format...');
            break;

        default:
            alert('Processing plain format...')
    }
}

{
    // Функции
    const value = 'value';

    function showValue() {
        const value = 'updatedValue';
        const innerValue = 'innerValue';

        console.log(value); // 'updatedValue'
    }

    console.log(innerValue); // innerValue is not defined


    function getWelcomeMessage(name, text = 'What a beautiful day, greetings') {
        return `${text}, ${name}`
    }
}

{
    // Function Expression
    myFunc(); // ReferenceError: Cannot access 'myFunc' before initialization
    const myFunc = function () {
        alert('Hello')
    }

    const funcCopy = myFunc;

    myFunc();
    funcCopy();


    fetchSomeData() // Есть возможность вызвать до объявления
    function fetchSomeData() {
        // ...
    }

    function showAlert() {
        // ...
    }
    const makeSomething = function(isAgree, trueCallback, falseCallback) {
        if (isAgree) {
            trueCallback();
        } else {
            falseCallback();
        }
    }

    const isAgree = confirm('Do you agree?');

    makeSomething(isAgree, fetchSomeData, showAlert);
}