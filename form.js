const form = document.getElementById('user-form');
const submitButton = document.getElementById('submit-btn');

let timeout = null;

document.querySelectorAll('.form-box').forEach((box) => {
    const boxInput = box.querySelector('input');

    boxInput.addEventListener('keydown', (event) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(`Input ${boxInput.name} value: `, boxInput.value );
        }, 300);
    });
});