document.addEventListener('DOMContentLoaded', () => {
    const subscriptionForm = document.getElementById('subscriptionForm');
    const mainContainer = document.getElementById('mainContainer');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const emailInput = document.getElementById('email');
    const userEmailSpan = document.getElementById('userEmail');
    const dismissButton = document.getElementById('dismissMessage');

    subscriptionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateEmail(emailInput.value)) {
            userEmailSpan.textContent = emailInput.value;
            mainContainer.style.display = 'none';
            successMessage.style.display = 'block';
        } else {
            emailInput.classList.add('error');
            errorMessage.textContent = 'Valid email required';
        }
    });

    emailInput.addEventListener('input', () => {
        emailInput.classList.remove('error');
        errorMessage.textContent = '';
    });

    dismissButton.addEventListener('click', () => {
        successMessage.style.display = 'none';
        mainContainer.style.display = 'flex';
        subscriptionForm.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});