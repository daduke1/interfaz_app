document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('.btn-primary');
    const nameInput = document.getElementById('register-name');
    const emailInput = document.getElementById('register-email');
    const passwordInput = document.getElementById('register-pass');
    const confirmPasswordInput = document.getElementById('register-pass-confirm');

    // agregar elementos de mensaje de error
    const nameError = document.createElement('div');
    nameError.className = 'error-message';
    nameInput.parentNode.appendChild(nameError);

    const emailError = document.createElement('div');
    emailError.className = 'error-message';
    emailInput.parentNode.appendChild(emailError);

    const passwordError = document.createElement('div');
    passwordError.className = 'error-message';
    passwordInput.parentNode.appendChild(passwordError);

    const confirmPasswordError = document.createElement('div');
    confirmPasswordError.className = 'error-message';
    confirmPasswordInput.parentNode.appendChild(confirmPasswordError);

    // css para el error de los campos
    const style = document.createElement('style');
    style.textContent = `
        .error-message {
            color: #dc3545;
            font-size: 12px;
            margin-top: 5px;
            text-align: left;
        }
        .input-error {
            border-color: #dc3545 !important;
        }
    `;
    document.head.appendChild(style);

    function validateName(name) {
        return name.length >= 3; // At least 3 characters
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8 && /[A-Z]/.test(password);
    }

    function validateConfirmPassword(password, confirmPassword) {
        return password === confirmPassword;
    }

    function validateForm() {
        let isValid = true;
        
        // validación de nombre
        if (!validateName(nameInput.value)) {
            nameError.textContent = 'El nombre debe tener al menos 3 caracteres';
            nameInput.classList.add('input-error');
            isValid = false;
        } else {
            nameError.textContent = '';
            nameInput.classList.remove('input-error');
        }

        // validación de correo electrónico
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Por favor, ingresa un correo electrónico válido';
            emailInput.classList.add('input-error');
            isValid = false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('input-error');
        }

        // validación de contraseña
        if (!validatePassword(passwordInput.value)) {
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres y una mayúscula';
            passwordInput.classList.add('input-error');
            isValid = false;
        } else {
            passwordError.textContent = '';
            passwordInput.classList.remove('input-error');
        }

        // validación de contraseña confirmada
        if (!validateConfirmPassword(passwordInput.value, confirmPasswordInput.value)) {
            confirmPasswordError.textContent = 'Las contraseñas no coinciden';
            confirmPasswordInput.classList.add('input-error');
            isValid = false;
        } else {
            confirmPasswordError.textContent = '';
            confirmPasswordInput.classList.remove('input-error');
        }

        return isValid;
    }

    // validación en tiempo real
    nameInput.addEventListener('input', () => {
        if (nameInput.value) {
            if (!validateName(nameInput.value)) {
                nameError.textContent = 'El nombre debe tener al menos 3 caracteres';
                nameInput.classList.add('input-error');
            } else {
                nameError.textContent = '';
                nameInput.classList.remove('input-error');
            }
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.value) {
            if (!validateEmail(emailInput.value)) {
                emailError.textContent = 'Por favor, ingresa un correo electrónico válido';
                emailInput.classList.add('input-error');
            } else {
                emailError.textContent = '';
                emailInput.classList.remove('input-error');
            }
        }
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value) {
            if (!validatePassword(passwordInput.value)) {
                passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres y una mayúscula';
                passwordInput.classList.add('input-error');
            } else {
                passwordError.textContent = '';
                passwordInput.classList.remove('input-error');
            }
        }
    });

    confirmPasswordInput.addEventListener('input', () => {
        if (confirmPasswordInput.value) {
            if (!validateConfirmPassword(passwordInput.value, confirmPasswordInput.value)) {
                confirmPasswordError.textContent = 'Las contraseñas no coinciden';
                confirmPasswordInput.classList.add('input-error');
            } else {
                confirmPasswordError.textContent = '';
                confirmPasswordInput.classList.remove('input-error');
            }
        }
    });

    // envío del formulario
    registerForm.addEventListener('click', function(e) {
        e.preventDefault();
        if (validateForm()) {
            // aquí típicamente enviarías los datos del formulario a tu servidor
            console.log('Formulario válido, procediendo con el registro...');
        }
    });
});