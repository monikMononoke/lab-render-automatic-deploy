# CLOUD RENDER AUTOMATIC DEPLOY WITH DOCKER

## Preparación del proyecto

- Creamos una carpeta server en la raíz de nuestro proyecto

- Dentro (cd /server) inicializamos el package.json con el siguiente comando

```bash
npm init -y
```

- Instalamos express para poder crear un servidor que sirva nuestra aplicación

```bash
npm install express 
```

- Creamos un archivo index.js dentro de la carpeta server con el siguiente contenido:

```javascript
const express = require('express');
const path = require('path');

const app = express();
const staticFilesPath = path.resolve(__dirname, './public');
app.use('/', express.static(staticFilesPath));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.resolve(staticFilesPath, 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

- Actualizamos el comando start de del package.json del servidor

```json
"scripts": {
  "start": "node index.js"
},
```

## Docker

- En la raíz del proyecto creamos un archivo `Dockerfile` y otro `.dockerignore` para configurar la imagen de nuestro contenedor y evitar copiar archivos innecesarios.

- El primer paso es elegir la imagen base que vamos a usar para nuestro contenedor. En este caso, vamos a usar la imagen oficial de Node.js en su versión 24, que es la última versión LTS disponible. Para ello, añadimos la siguiente línea al `Dockerfile`

```Dockerfile
FROM node:24-alpine
```

- En el comando RUN del `Dockerfile` creamos una carpeta llamada `app` dentro del contenedor, que es donde vamos a copiar nuestro código y ejecutar nuestra aplicación. Para ello, añadimos la siguiente línea al `Dockerfile`

```Dockerfile
RUN mkdir -p /usr/app
WORKDIR /usr/app
```

- A continuación, copiamos la raíz de nuestro proyecto al contenedor, para que el código de nuestra aplicación esté disponible dentro del contenedor. Para ello, añadimos la siguiente línea al `Dockerfile`

```Dockerfile
COPY ./ ./
```

- Ejecutamos el comando `npm install` para instalar las dependencias de nuestro proyecto dentro del contenedor. Para ello, añadimos la siguiente línea al `Dockerfile`

```Dockerfile
RUN npm install
```

- Ejecutamos el comando `npm run build` para construir nuestra aplicación dentro del contenedor. Para ello, añadimos la siguiente línea al `Dockerfile`

```Dockerfile
RUN npm run build
```

- Copiamos el contenido de la carpeta `dist` a la carpeta `public` dentro de la carpeta `server`, para que el servidor pueda servir los archivos estáticos de nuestra aplicación. Para ello, añadimos la siguiente línea al `Dockerfile`

```Dockerfile
RUN cp -r ./dist ./server/public
```

- Entramos a la carpeta `server` para ejecutar el comando `npm install` y así instalar las dependencias del servidor dentro del contenedor. Para ello, añadimos la siguiente línea al `Dockerfile`

```Dockerfile
RUN cd ./server && npm install
```

- Configuramos el puerto en el que nuestro servidor va a escuchar las peticiones. En este caso, vamos a usar el puerto 8080, que es un puerto comúnmente usado para aplicaciones web. Para ello, añadimos la siguiente línea al `Dockerfile`

```Dockerfile
ENV PORT=8080
```

- Configuramos el comando que se va a ejecutar cuando el contenedor se inicie. En este caso, vamos a ejecutar el comando `npm start` dentro de la carpeta `server`, para que nuestro servidor empiece a escuchar las peticiones. Para ello, añadimos la siguiente línea al `Dockerfile`

```Dockerfile
CMD ["node", "./server/index.js"]
```

### Docker multistage: Optimización de la imagen

- En el primer stage, que llamaremos `base`, vamos a elegir la imagen base de Node.js y crear la carpeta `app` dentro del contenedor, como hemos hecho anteriormente. Para ello, añadimos las siguientes líneas al `Dockerfile`

```Dockerfile
FROM node:24-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app
```

- En el segundo stage, que llamaremos `build`, vamos a copiar el código de nuestro proyecto al contenedor, instalar las dependencias y construir nuestra aplicación. Para ello, añadimos las siguientes líneas al `Dockerfile`

```Dockerfile
FROM base AS build
COPY ./ ./
RUN npm install
RUN npm run build
```

- En el tercer stage, que llamaremos `release`, vamos a copiar solo los archivos necesarios para ejecutar nuestra aplicación, es decir, el contenido de la carpeta `dist` y el código del servidor. Para ello, añadimos las siguientes líneas al `Dockerfile`

```diff
- RUN cp -r ./dist ./server/public
- RUN cd ./server && npm install
+ FROM base AS release
+ COPY --from=build /usr/app/dist ./public
+ COPY ./server/package.json ./
+ COPY ./server/package-lock.json ./
+ COPY ./server/index.js ./
+COPY ./server/index.js ./
+RUN npm ci --omit=dev
```

Así que cambiamos el comando CMD:

```diff
- CMD ["node", "./server/index.js"]
+ CMD ["node", "index.js"]
```

- Con esta configuración, el contenedor solo va a contener los archivos necesarios para ejecutar nuestra aplicación, lo que va a reducir el tamaño de la imagen y mejorar el rendimiento de nuestro contenedor.

## Construcción y despliegue: Comandos

- Para construir la imagen de nuestro contenedor, ejecutamos el siguiente comando en la raíz de nuestro proyecto:

```bash
docker build -t render-automatic-deploy .
```

- Para ejecutar el contenedor, ejecutamos el siguiente comando:

```bash
docker run -p 8080:8080 render-automatic-deploy
```

- Para verificar que nuestra aplicación está funcionando correctamente, podemos abrir nuestro navegador y acceder a la URL `http://localhost:8080`. Si todo ha ido bien, deberíamos ver nuestra aplicación corriendo dentro del contenedor.

- Para detener el contenedor, podemos usar el comando `docker ps` para obtener el ID del contenedor y luego ejecutar el siguiente comando:

```bash
docker stop <container_id>
```

- Para ver los contenedores que tenemos en ejecución, podemos usar el siguiente comando:

```bash
docker ps
```

- Para ver las imágenes que tenemos en nuestro sistema, podemos usar el siguiente comando:

```bash
docker images
```

## GitHub

Crear un repositorio en GitHub y subir el código de nuestro proyecto a ese repositorio.

## Render

- En render.com, desde nuestro Dashboard hacemos click en el botón "New" y seleccionamos "Web Service" para crear un nuevo servicio web.

- Conectamos nuestro repositorio de GitHub a Render para que pueda acceder al código de nuestro proyecto.

- En Language seleccionamos "Docker" para indicar que vamos a usar un contenedor Docker para ejecutar nuestra aplicación.

## Nota: Cómo subir la imagen a Dockerhub

- Iniciamos sesión en Dockerhub con el siguiente comando:

```bash
docker login
```

- Etiquetamos nuestra imagen con el nombre de nuestro repositorio en Dockerhub. Por ejemplo, si nuestro nombre de usuario es `lemoncode` y el nombre de nuestro repositorio es `render-automatic-deploy`, el comando sería el siguiente:

```bash
docker tag render-automatic-deploy lemoncode/render-automatic-deploy
```

- Subimos la imagen a Dockerhub con el siguiente comando:

```bash
docker push lemoncode/render-automatic-deploy
```
