const elInput = document.getElementById('input');
const elBtn = document.getElementById('btn');
const elResult = document.getElementById('result');

elBtn.addEventListener('click', function() {
    if (elInput.value <= 50) {
        elResult.textContent = 'Afsuski oqishga kira olmadingiz 😔'
    } else if (elInput.value <= 70) {
        elResult.textContent = 'Oqishga superkontrakt asosida kirdingiz 😑'
    } else if (elInput.value <= 80) {
        elResult.textContent = 'Oqishga kontrakt asosida kirdingiz 👍'
    } else if (elInput.value <= 100) {
        elResult.textContent = 'Oqishga Grand asosida kirdingiz 👌🏻😎'
    }
})