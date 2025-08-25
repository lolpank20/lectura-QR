Instrucciones para probar la PoC:

1. Instala las dependencias en cada servicio:
   - Ve a la carpeta shop-service y ejecuta: npm install express
   - Ve a la carpeta qr-service y ejecuta: npm install express

2. Inicia ambos servicios:
   - node server.js (en cada carpeta)

3. Abre http://localhost:3001 en tu navegador para simular el comercio.

4. Llena el formulario y genera el QR. El QR se mostrará en el iframe, generado por el qr-service.

Ambos servicios pueden ser modificados para agregar validaciones, logs, o integración real con otros sistemas según sea necesario.
