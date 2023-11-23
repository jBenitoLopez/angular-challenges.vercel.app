# `npm ci`

es un comando de la línea de comandos de Node Package Manager (npm) que se utiliza para instalar las dependencias de un proyecto Node.js basándose en el archivo `package-lock.json` o `npm-shrinkwrap.json`. A diferencia de `npm install`, que se utiliza comúnmente en entornos de desarrollo, `npm ci` está diseñado para entornos de integración continua (CI) y entornos de producción.

Algunas características clave de `npm ci` incluyen:

1. **Instalación rápida y consistente:** `npm ci` instala las dependencias de manera más rápida y consistente al utilizar la información almacenada en el archivo `package-lock.json` o `npm-shrinkwrap.json`. Esto ayuda a garantizar que las versiones exactas de las dependencias se instalen, lo que es crucial para entornos de producción.

2. **Modo de instalación en modo estricto:** `npm ci` opera en un modo estricto, lo que significa que solo instala las dependencias si los archivos de bloqueo (`package-lock.json` o `npm-shrinkwrap.json`) están presentes y son válidos. Si hay discrepancias entre las dependencias especificadas en el archivo de bloqueo y el `package.json`, `npm ci` fallará, lo que puede ser útil para garantizar la coherencia del entorno.

3. **No actualiza el archivo `package-lock.json`:** A diferencia de `npm install`, `npm ci` no actualiza el archivo `package-lock.json`. Esto es útil en entornos de producción donde se desea una reproducción exacta de las dependencias utilizadas durante el desarrollo.

En resumen, `npm ci` es una herramienta específica para entornos de integración continua y producción, diseñada para garantizar una instalación rápida y coherente de las dependencias basándose en la información del archivo de bloqueo.
