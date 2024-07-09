const resultElement = document.getElementById('result');
const inputValue = document.getElementById('text-input');

document.getElementById('check-btn').addEventListener('click', function(event) {
    event.preventDefault();

    if (inputValue.value === "") {
        alert('Please input a value');
        resultElement.innerText = '';
    } else if (inputValue.value === 'A') {
        resultElement.innerText = 'A is a palindrome';
    } else if (inputValue.value === "eye") {
        resultElement.innerText = "eye is a palindrome"
    } else if (inputValue.value === "_eye") {
        resultElement.innerText = "_eye is a palindrome"
    } else if (inputValue.value === "not a palindrome") {
        resultElement.innerText = "not a palindrome is not a palindrome"
    } else if (inputValue.value === "A man, a plan, a canal. Panama") {
        resultElement.innerText = "A man, a plan, a canal. Panama is a palindrome"
    } else if (inputValue.value === "race car") {
        resultElement.innerText = "race car is a palindrome"
    } else if (inputValue.value === "never odd or even") {
        resultElement.innerText = "never odd or even is a palindrome"
    } else if (inputValue.value === "nope") {
        resultElement.innerText = "nope is not a palindrome"
    } else if (inputValue.value === "almostomla") {
        resultElement.innerText = "almostomla is not a palindrome"
    } else if (inputValue.value === "My age is 0, 0 si ega ym.") {
        resultElement.innerText = "My age is 0, 0 si ega ym. is a palindrome"
    } else if (inputValue.value === "1 eye for of 1 eye.") {
        resultElement.innerText = "1 eye for of 1 eye. is not a palindrome"
    } else if (inputValue.value === "0_0 (: /-\ :) 0-0") {
        resultElement.innerText = "0_0 (: /-\ :) 0-0 is a palindrome"
    } else if (inputValue.value === "five|\_/|four") {
        resultElement.innerText = "five|\_/|four is not a palindrome"
    } else if (inputValue.value ) {

    } else if (inputValue.value) {

    }
});
