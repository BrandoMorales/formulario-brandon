document.getElementById('miFormulario').addEventListener('submit', function (evento) {
    evento.preventDefault();

    const formulario = evento.target;
    const datosFormulario = new FormData(formulario);

    let datosHTML = '';
    for (let [campo, valor] of datosFormulario.entries()) {
        let nombreCampo = campo;
        switch (campo) {
            case 'nombre': nombreCampo = 'Nombre completo'; break;
            case 'email': nombreCampo = 'Correo electrónico'; break;
            case 'edad': nombreCampo = 'Edad'; break;
            case 'ciudad': nombreCampo = 'Ciudad'; break;
            case 'experiencia': nombreCampo = 'Experiencia en programación'; break;
            case 'acepto': nombreCampo = 'Términos aceptados'; break;
            case 'comentarios': nombreCampo = 'Comentarios'; break;
        }

        if (valor && valor.trim() !== '') {
            datosHTML += `
                <div class="dato">
                    <span class="etiqueta">${nombreCampo}:</span> ${valor}
                </div>
            `;
        }
    }

    document.getElementById('datosEnviados').innerHTML = datosHTML;
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth' });

    alert('¡Formulario enviado correctamente! 🎉\nRevisa los datos más abajo.');
});

function limpiarFormulario() {
    document.getElementById('miFormulario').reset();
    document.getElementById('resultado').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.querySelector('.container');
    const botonLimpiar = document.createElement('button');
    botonLimpiar.innerHTML = '⛔ Limpiar Formulario';
    botonLimpiar.style.backgroundColor = '#ff2d00';
    botonLimpiar.style.marginTop = '10px';
    botonLimpiar.onclick = limpiarFormulario;
    contenedor.appendChild(botonLimpiar);
});

const inputs = document.querySelectorAll('#miFormulario input, #miFormulario select, #miFormulario textarea');
const progreso = document.getElementById('progreso');
const porcentajeTexto = document.getElementById('porcentaje');

inputs.forEach(input => {
    input.addEventListener('input', actualizarProgreso);
    input.addEventListener('change', actualizarProgreso);
});

function actualizarProgreso() {
    let completados = 0;
    let totales = 0;

    inputs.forEach(input => {
        const tipo = input.type;
        if (tipo === 'submit' || tipo === 'button' || input.disabled) return;
        totales++;

        if ((tipo === 'checkbox' || tipo === 'radio') && input.checked) {
            completados++;
        } else if (tipo !== 'checkbox' && tipo !== 'radio' && input.value.trim() !== '') {
            completados++;
        }
    });

    const progresoTotal = Math.round((completados / totales) * 100);
    progreso.value = progresoTotal;
    porcentajeTexto.innerText = progresoTotal + '%';
}
document.getElementById('miFormulario').addEventListener('submit'), function (evento) {
    evento.preventDefault();

     }

     const emailInput = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');

emailInput.addEventListener('input', function() {
    const valor = emailInput.value.trim();
    if (!validarEmail(valor)) {
        errorEmail.textContent = 'Correo no válido. Debe ser formato ejemplo@correo.com';
        emailInput.setCustomValidity('Correo inválido');
    } else {
        errorEmail.textContent = '';
        emailInput.setCustomValidity('');
    }
});

function validarEmail(email) {
    // Expresión regular básica para validar email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Evitar copiar, pegar y cortar (ya está con oncopy, onpaste, oncut en HTML)
// Pero reforzamos con JS para prevenir por si acaso:

['copy', 'paste', 'cut'].forEach(evento => {
    emailInput.addEventListener(evento, e => {
        e.preventDefault();
        alert('No está permitido copiar, pegar o cortar en este campo.');
    });
});
