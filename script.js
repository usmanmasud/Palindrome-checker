const resultElement = document.getElementById('result');
const inputValue = document.getElementById('text-input');

document.getElementById('check-btn').addEventListener('click', function(event) {
    event.preventDefault();

    if (inputValue.value === "") {
        alert('Please input a value');
        resultElement.innerText = '';
    } else if (isPalindrome(inputValue.value)) {
        resultElement.innerText = `${inputValue.value} is a palindrome`
    } else{
        resultElement.innerText = `${inputValue.value} is not a palindrome` 
    }
});

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join("");
    return cleanedStr === reversedStr
}
