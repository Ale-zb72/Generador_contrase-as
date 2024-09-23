let cantidad = document.getElementById('cantidad');
let contrasena = document.getElementById('contrasena');
let seguridad = document.getElementById('seguridad');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    let password = '';

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        cantidad.value = '';
        seguridad.value = '';
        return;
    }

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }

    contrasena.value = password;
    evaluarSeguridad(password);
}

function evaluarSeguridad(password) {
    let tieneMayusculas = /[A-Z]/.test(password);
    let tieneMinusculas = /[a-z]/.test(password);
    let tieneNumeros = /[0-9]/.test(password);
    let tieneSimbolos = /[!@#$%^&*()]/.test(password);

    let nivelSeguridad = 0;
    if (tieneMayusculas) nivelSeguridad++;
    if (tieneMinusculas) nivelSeguridad++;
    if (tieneNumeros) nivelSeguridad++;
    if (tieneSimbolos) nivelSeguridad++;

    switch (nivelSeguridad) {
        case 1:
            seguridad.textContent = 'La seguridad de tu contraseña es débil.';
            progressBar.style.width = '25%';
            progressBar.style.backgroundColor = 'red';
            break;
        case 2:
            seguridad.textContent = 'La seguridad de tu contraseña es media.';
            progressBar.style.width = '50%';
            progressBar.style.backgroundColor = 'orange';
            break;
        case 3:
            seguridad.textContent = 'La seguridad de tu contraseña es fuerte.';
            progressBar.style.width = '75%';
            progressBar.style.backgroundColor = 'yellow';
            break;
        case 4:
            seguridad.textContent = 'La seguridad de tu contraseña es muy fuerte.';
            progressBar.style.width = '100%';
            progressBar.style.backgroundColor = 'green';
            break;
        default:
            seguridad.textContent = '';
            progressBar.style.width = '0%';
    }
}

function limpiar() {
    contrasena.value = '';
    cantidad.value = '';
    seguridad.textContent = 'Seguridad de contraseña:';
    progressBar.style.width = '0%'; 
}