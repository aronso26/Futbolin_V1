FUTBOLÍN V1.8 — PWA OFFLINE

Esta versión mantiene la mecánica validada de V1.5/V1.6/V1.7 y agrega la preparación completa para usar Futbolín sin la computadora como servidor.

INCLUYE
- PWA instalable.
- Manifest completo.
- Iconos para iPhone.
- Service Worker con caché de todos los recursos locales.
- Cambio automático de versión de caché.
- Fallback de navegación cuando no hay Internet.
- Datos de la jornada siguen guardándose localmente en el iPhone.
- Indicador de estado de conexión.

IMPORTANTE
Para que el Service Worker y la instalación PWA funcionen en un iPhone, la primera carga debe hacerse por HTTPS. GitHub Pages ofrece HTTPS automáticamente en los sitios github.io.

PUBLICACIÓN GRATUITA EN GITHUB PAGES
1. Crea una cuenta de GitHub si todavía no tienes una.
2. Crea un repositorio nuevo, por ejemplo: futbolin
3. Sube TODOS los archivos y carpetas de este ZIP:
   index.html
   manifest.json
   sw.js
   icons/
   sounds/
4. En GitHub entra a:
   Settings > Pages
5. En "Build and deployment", selecciona:
   Deploy from a branch
6. Selecciona la rama principal (normalmente main) y carpeta / (root).
7. Guarda.
8. GitHub generará una dirección parecida a:
   https://TU-USUARIO.github.io/futbolin/
9. Abre esa dirección desde Safari en el iPhone.
10. Espera a que cargue completamente.
11. Safari > Compartir > Añadir a pantalla de inicio.

PRUEBA OFFLINE
Después de abrir la aplicación al menos una vez con Internet:
1. Abre Futbolín desde el icono de la pantalla de inicio.
2. Activa Modo Avión.
3. Abre una jornada.
4. Crea parejas y prueba una partida.
5. El juego debe continuar funcionando sin Internet.

NOTA
GitHub Pages solo entrega los archivos. Durante una jornada Futbolín no necesita conectarse a GitHub: la aplicación y sus datos trabajan localmente en el iPhone.

SEGURIDAD DE DATOS
No coloques contraseñas, datos personales sensibles ni información privada en el repositorio. GitHub Pages publica el contenido del sitio en Internet.
