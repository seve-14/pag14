document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    var registeredUsername = localStorage.getItem('registeredUsername');
    var registeredPassword = localStorage.getItem('registeredPassword');

    if (username === registeredUsername && password === registeredPassword) {
        alert('Inicio de sesión exitoso.');
        window.location.href = 'main.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});