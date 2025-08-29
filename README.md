# Proyecto Lectura-QR

## Descripción
Este proyecto es una prueba de concepto (PoC) que simula un sistema de pagos mediante códigos QR. Consta de dos servicios principales:

1. **Shop Service**: Simula una tienda en línea donde los usuarios pueden seleccionar productos y generar pagos mediante QR.
2. **QR Service**: Genera y muestra los códigos QR basados en la información de pago.

## Estructura del Proyecto

```
├── qr-service/            # Servicio de generación de QR
│   ├── package.json       # Dependencias del servicio QR
│   ├── server.js          # Servidor Express para el servicio QR
│   └── public/            # Archivos estáticos
│       ├── index.html     # Página principal del servicio QR
│       └── qr.html        # Plantilla para mostrar el QR
│
└── shop-service/          # Servicio de tienda
    ├── package.json       # Dependencias del servicio de tienda
    ├── server.js          # Servidor Express para la tienda
    └── public/            # Archivos estáticos
        ├── index.html     # Página principal de la tienda
        ├── cart.html      # Página del carrito de compras
        ├── checkout.html  # Página de pago
        ├── payment-iframe.html # Iframe para mostrar el QR de pago
        └── style.css      # Estilos CSS
```

## Requisitos

- Node.js (versión recomendada: 14.x o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona este repositorio o descárgalo como ZIP
2. Instala las dependencias para ambos servicios:

```bash
# Para el servicio de tienda
cd shop-service
npm install

# Para el servicio de QR
cd ../qr-service
npm install
```

## Iniciar los Servicios

### Servicio de Tienda
```bash
cd shop-service
npm start
```
Este servicio se ejecutará en http://localhost:3001

### Servicio de QR
```bash
cd qr-service
npm start
```
Este servicio se ejecutará en http://localhost:3002

## Uso

1. Abre http://localhost:3001 en tu navegador para acceder a la tienda demo.
2. Navega por el catálogo y agrega productos al carrito.
3. Ve al carrito y procede al checkout.
4. En la página de checkout, selecciona "BRE-B by Aval" como método de pago.
5. Haz clic en "Generar QR" para crear un código QR de pago.
6. El QR generado expirará automáticamente después de 30 segundos.

## Características Principales

- Simulación de tienda en línea con catálogo de productos
- Carrito de compras funcional
- Generación de códigos QR para pagos
- Expiración automática de QR después de 30 segundos
- Interfaz de usuario intuitiva

## Configuración

### Puertos
- Shop Service: Puerto 3001 (configurable en shop-service/server.js)
- QR Service: Puerto 3002 (configurable en qr-service/server.js)

### Tiempo de Expiración del QR
El tiempo de expiración del QR está configurado en 30 segundos. Puedes modificar este valor en el archivo `shop-service/public/payment-iframe.html`:

```javascript
qrTimeout = setTimeout(limpiarQRporExpiracion, 30 * 1000); // 30 segundos
```

## Notas Adicionales

- Este proyecto es una prueba de concepto y no debe usarse en producción sin las debidas modificaciones de seguridad.
- Los datos de pago son simulados y no se procesan transacciones reales.
- Ambos servicios pueden ser modificados para agregar validaciones, logs, o integración real con otros sistemas según sea necesario.

## Solución de Problemas

### Los servicios no inician
- Verifica que los puertos 3001 y 3002 no estén siendo utilizados por otras aplicaciones.
- Asegúrate de haber instalado todas las dependencias con `npm install`.

### El QR no se muestra
- Verifica que ambos servicios estén ejecutándose correctamente.
- Comprueba la consola del navegador para ver si hay errores.

### El QR expira demasiado rápido o lento
- Ajusta el tiempo de expiración en `shop-service/public/payment-iframe.html`.