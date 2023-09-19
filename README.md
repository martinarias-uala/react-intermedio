# My Movie App

Esta es una aplicación web desarrollada con Vite, React, TypeScript y Tailwind CSS que consume la API de Movies Database a través de RapidAPI para mostrar información sobre películas.

## Configuración

Antes de ejecutar la aplicación, asegúrate de configurar las variables de entorno necesarias en un archivo `.env` en la raíz del proyecto. Debes proporcionar los siguientes valores:

- `VITE_MOVIES_API_BASE_URL`: La URL de la API de Movies Database (https://moviesdatabase.p.rapidapi.com).
- `VITE_MOVIES_RAPIDAPI_KEY`: Tu clave de API de RapidAPI.
- `VITE_MOVIES_RAPIDAPI_HOST`: El host de RapidAPI.

Puedes obtener una clave de API y configurar RapidAPI siguiendo las instrucciones en [https://rapidapi.com/](https://rapidapi.com/).

## Comandos

Puedes utilizar los siguientes comandos para desarrollar, construir y ejecutar la aplicación:

- `npm install`: Instala las dependencias del proyecto.
- `npm run dev`: Inicia el servidor de desarrollo de Vite.
- `npm run build`: Construye la aplicación para producción.
- `npm run lint`: Ejecuta ESLint para analizar el código TypeScript y React.
- `npm run preview`: Inicia un servidor de vista previa de la aplicación construida.

## Desarrollo

Si deseas contribuir al desarrollo de esta aplicación, sigue estos pasos:

1. Clona el repositorio: `git clone https://github.com/tuusuario/tu-repositorio.git`
2. Instala las dependencias: `npm install`
3. Configura las variables de entorno en un archivo `.env` como se describe anteriormente.
4. Desarrolla nuevas características o realiza correcciones de errores.
5. Ejecuta `npm run dev` para probar tus cambios localmente.
6. Realiza un pull request con tus cambios.

## Criterios de Aceptación

1. **Contexto con `useContext`:** Implementa un contexto utilizando el hook `useContext` para compartir datos de películas entre componentes de manera eficiente.

2. **Carga de Datos con `useEffect`:** Utiliza el hook `useEffect` para cargar datos de películas desde la API de Movies Database. Asegúrate de manejar adecuadamente los ciclos de vida de los componentes.

3. **Gestión de Estados con `useReducer`:** Utiliza el hook `useReducer` para gestionar los estados de carga, éxito y error al interactuar con la API de películas. Esto incluye manejar las transiciones de estado de manera adecuada.

4. **Paginación:** Implementa la paginación de datos de películas de manera óptima. Asegúrate de que la paginación se realice de manera eficiente y que los datos se carguen de acuerdo con las páginas solicitadas.

5. **Filtrado por Nombre:** Agrega un campo de entrada (`input`) que permita a los usuarios filtrar las películas por nombre.

![Alt text](/public/image.png)