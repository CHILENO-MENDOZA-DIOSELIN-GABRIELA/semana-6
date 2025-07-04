document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const submitButton = document.getElementById('submitButton');

    form.addEventListener('input', function() {
        validateForm();
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado con éxito!');
    });

    function validateForm() {
        let isValid = true;

        // Validar nombre
        const name = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (name.value.length < 3) {
            name.classList.add('invalid');
            name.classList.remove('valid');
            nameError.textContent = 'El nombre debe tener al menos 3 caracteres.';
            isValid = false;
        } else {
            name.classList.add('valid');
            name.classList.remove('invalid');
            nameError.textContent = '';
        }

        // Validar correo electrónico
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('invalid');
            email.classList.remove('valid');
            emailError.textContent = 'Formato de correo electrónico inválido.';
            isValid = false;
        } else {
            email.classList.add('valid');
            email.classList.remove('invalid');
            emailError.textContent = '';
        }

        // Validar contraseña
        const password = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordPattern.test(password.value)) {
            password.classList.add('invalid');
            password.classList.remove('valid');
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres, un número y un carácter especial.';
            isValid = false;
        } else {
            password.classList.add('valid');
            password.classList.remove('invalid');
            passwordError.textContent = '';
        }

        // Validar confirmación de contraseña
        const confirmPassword = document.getElementById('confirmPassword');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        if (confirmPassword.value !== password.value) {
            confirmPassword.classList.add('invalid');
            confirmPassword.classList.remove('valid');
            confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
            isValid = false;
        } else {
            confirmPassword.classList.add('valid');
            confirmPassword.classList.remove('invalid');
            confirmPasswordError.textContent = '';
        }

        // Validar edad
        const age = document.getElementById('age');
        const ageError = document.getElementById('ageError');
        if (age.value < 18) {
            age.classList.add('invalid');
            age.classList.remove('valid');
            ageError.textContent = 'Debes ser mayor de 18 años.';
            isValid = false;
        } else {
            age.classList.add('valid');
            age.classList.remove('invalid');
            ageError.textContent = '';
        }

        // Habilitar o deshabilitar el botón de envío
        submitButton.disabled = !isValid;
    }
});
