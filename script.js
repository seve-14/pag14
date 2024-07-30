function openWhatsApp(number, message) {
    var url = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank');
}

function logout() {
    // Limpiar los datos de sesión (opcional dependiendo del enfoque de autenticación)
    localStorage.removeItem('registeredUsername');
    localStorage.removeItem('registeredPassword');
    alert("Sesión cerrada correctamente.");
    // Redirigir a la página de inicio de sesión
    window.location.href = 'index.html';
}

function openStreamingService(service) {
    switch (service) {
        case 'HBO MAX':
            window.location.href = 'hbo_max.html';
            break;
        default:
            alert("Funcionalidad para " + service + " no implementada.");
    }
}

function contactAdvisor1() {
    var message = 'Quiero comprar HBO MAX MUNDONET';
    var number = '573148618307';
    openWhatsApp(number, message);
}
function contactAdvisor2() {
    var message = 'Quiero comprar HBO MAX MUNDONET';
    var number = '573227669390';
    openWhatsApp(number, message);
}