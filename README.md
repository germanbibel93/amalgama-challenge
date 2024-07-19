# Amalgama Challenge

Este proyecto es una aplicación de React creada para el desafío de autenticación de Amalgama. Utiliza React 18 con TypeScript, Context API y el patrón Flux para manejar el estado global de autenticación. La aplicación incluye una pantalla de inicio de sesión y una pantalla privada accesible solo para usuarios autenticados.

## Características

- Pantalla de inicio de sesión con email y password.
- Manejo de autenticación utilizando Context API y patrón Flux.
- Redirección automática a la pantalla privada después de iniciar sesión.
- Protección de rutas privadas.
- Funcionalidad de cierre de sesión.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone git@github.com:germanbibel93/amalgama-challenge.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd amalgama-challenge
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

1. Inicia la aplicación:

   ```bash
   npm start
   ```

2. Abre tu navegador y ve a `http://localhost:3000`.

3. Usa las siguientes credenciales para iniciar sesión:
   - **Email**: `user@amalgama.co`
   - **Password**: `password`

## Estructura del Proyecto

- `src/context/AuthContext.tsx`: Maneja el estado de autenticación utilizando Context API y el patrón Flux.
- `src/components/Login.tsx`: Componente de la pantalla de inicio de sesión.
- `src/components/PrivateScreen.tsx`: Componente de la pantalla privada.
- `src/components/PrivateRoute.tsx`: Componente para proteger rutas privadas.
- `src/App.tsx`: Configuración de rutas y navegación.

## Mejoras Futuras

- Mejorar toda la folder structure (agregar la folder pages al menos)
- Utilizar redux-toolkit para manejo de estado para eliminar el boilerplate del patron flux
- Implementar manejo de errores más detallado.
- Agregar pruebas unitarias e integración.
- Mejorar la seguridad usando cookies HttpOnly en lugar de `localStorage` para almacenar tokens.
