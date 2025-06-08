Formulario Avanzado – README

Versión: 1.0 – Junio 2025

Este proyecto contiene un formulario HTML/CSS/JavaScript con validación avanzada, barra de progreso, indicador de fortaleza de contraseña y resumen de datos enviados. Está pensado como punto de partida para integrarlo en sistemas de registro o páginas de contacto con requisitos de validación estrictos.

✨ Características principales

Función

Descripción

Validación en tiempo real

• Verifica nombre, email, contraseña, confirmación, teléfono, fecha y aceptación de términos.

• Muestra mensajes de error/éxito por campo y resalta bordes (valido / invalido).

Indicador de fortaleza de contraseña

Barra de color que cambia de rojo → amarillo → verde según complejidad.

Barra de progreso global

progress HTML5 + % completado, actualiza al escribir o seleccionar.

Resumen de datos

Después de enviar se listan los valores (sin mostrar contraseñas).

Prevención de copiar/pegar

Deshabilitado en el campo email y contraseña para mayor seguridad.

Botón Limpiar

Restablece todo y oculta resultados.

🗂️ Estructura de archivos

project/
│
├── index.html      # Estructura del formulario y enlaces a recursos
├── style.css       # Estilos (colores, tipografía, estados, etc.)
└── script.js       # Toda la lógica de validación y UI dinámica

Si prefieres otros nombres, actualiza las rutas en index.html.

🚀 Cómo ejecutar

Clona o descarga el repositorio.

Asegúrate de tener cualquier servidor estático o simplemente abre index.html en tu navegador moderno (Chrome, Firefox, Edge).

Interactúa con el formulario.

Pulsa Enviar para ver el resumen bajo el formulario.

No se requieren dependencias externas ni gestores de paquetes.

🔧 Personalización rápida

Queremos cambiar…

Archivo / Sección

Cómo hacerlo

Color de fondo general

style.css → body { background-color: … }

Ajusta el hex o usa variables CSS.

Tono de la barra de progreso

.barra-progreso y clases de fortaleza en style.css

Cambia background:.

Agregar campos

Añade <div class="form-group"> … </div> en index.html y extiende la lógica de validación en script.js.

Traducciones

Modifica etiquetas visibles y mensajes dentro de script.js.

🛠️ Validación detallada

Nombre / Apellido: 3–40 caracteres, letras y espacios.

Email: Expresión regular estándar.

Contraseña: mínimo 6 caracteres; fortaleza basada en longitud, mayúsculas, minúsculas, números y símbolos.

Confirmación: Debe coincidir con la contraseña.

Teléfono: Formato automático 300-123-4567.

Fecha de nacimiento: Debe implicar edad ≥ 18 y ≤ 100 años.

Checkbox: Términos obligatorios.

Los mensajes se muestran en los contenedores .mensaje-error / .mensaje-exito creados junto a cada campo.

📸 Capturas sugeridas (opcional)

Incluye imágenes de ejemplo mostrando:

Formulario al 0 % completado.

Contraseña con fortaleza "media".

Resumen de datos después de enviar.

📄 Licencia

Distribuido bajo la licencia MIT. Consulta LICENSE para más detalles.

🤝 Contribuciones

Pull requests son bienvenidos. Para cambios mayores, abre primero un issue para discutir lo que deseas modificar.

🙋 Soporte

Si encuentras errores o tienes preguntas, abre un issue o contáctame.3115721993 o felipemoralesherrera88@outlook.com