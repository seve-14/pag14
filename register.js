document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;

    // Guardar los datos de registro en localStorage (simulación)
    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredPassword', password);

    alert('Registro exitoso. Ahora puede iniciar sesión.');
    window.location.href = 'login.html';
});