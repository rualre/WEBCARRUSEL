# Cómo ejecutar tu proyecto de Carrusel Education

¡Felicitaciones por descargar tu proyecto! Sigue estos pasos para ponerlo en marcha en tu computadora usando Visual Studio Code.

## Prerrequisitos

Antes de empezar, asegúrate de tener instalado lo siguiente en tu sistema:

1.  **[Node.js](https://nodejs.org/)**: Necesitarás Node.js para ejecutar el proyecto. La instalación de Node.js también incluye `npm` (Node Package Manager), que se usa para gestionar las dependencias del proyecto. Te recomendamos usar la versión LTS (Long-Term Support).

## Pasos para ejecutar el proyecto

1.  **Descomprime el archivo**: Si descargaste un archivo `.zip`, primero debes descomprimirlo en una carpeta en tu computadora.

2.  **Abre el proyecto en VS Code**:
    *   Abre Visual Studio Code.
    *   Ve a `Archivo` > `Abrir carpeta...` y selecciona la carpeta del proyecto que acabas de descomprimir.

3.  **Abre la terminal integrada**:
    *   Dentro de VS Code, puedes abrir una terminal yendo a `Terminal` > `Nueva terminal` en el menú superior. Se abrirá un panel en la parte inferior del editor.

4.  **Instala las dependencias**:
    *   En la terminal que acabas de abrir, escribe el siguiente comando y presiona `Enter`. Este comando leerá el archivo `package.json` y descargará todas las librerías y paquetes que tu proyecto necesita para funcionar.
    ```bash
    npm install
    ```

5.  **Inicia el servidor de desarrollo**:
    *   Una vez que el comando anterior termine, escribe el siguiente comando y presiona `Enter`. Esto iniciará tu aplicación en modo de desarrollo.
    ```bash
    npm run dev
    ```

6.  **¡Mira tu proyecto!**:
    *   La terminal te mostrará un mensaje indicando que el servidor está corriendo. Abre tu navegador web (como Chrome, Firefox o Edge) y ve a la siguiente dirección:
    *   **http://localhost:9002**

¡Eso es todo! Ahora deberías ver tu página web funcionando en tu máquina local. Cualquier cambio que hagas en el código en VS Code se reflejará automáticamente en el navegador.
