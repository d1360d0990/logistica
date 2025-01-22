# logistica

Api Logística

**Descripción**

Este proyecto es una API de logística que permite gestionar órdenes de logística de manera eficiente. La API está diseñada para ser utilizada por aplicaciones web y móviles que requieren de una solución de logística robusta y escalable.

**Características**
-------------------

* Gestionar órdenes de logística: crear, leer, actualizar y eliminar órdenes de logística.
* Filtros de búsqueda: buscar órdenes de logística por cliente, destino, fecha de creación, fecha de entrega y estado.
* Conexión a base de datos: utiliza MongoDB como base de datos para almacenar y recuperar datos de órdenes de logística.

**Tecnologías Utilizadas**

* Node.js: plataforma de ejecución de JavaScript para servidor.
* Express.js: framework de Node.js para crear aplicaciones web.
* MongoDB: base de datos NoSQL para almacenar y recuperar datos.
* Mongoose: biblioteca de Node.js para interactuar con MongoDB.
* Cors: biblioteca de Node.js para habilitar CORS (Cross-Origin Resource Sharing).

**Instalación**
---------------

1. Clona el repositorio: `git clone https://github.com/d1360d0990/logistica.git`
2. Instala las dependencias: `npm install`
3. Configura las variables de entorno: crea un archivo `.env` con las variables de entorno necesarias (ver ejemplo en `.env`)
4. Inicia la aplicación: `npm start`

**Endpoints**
-------------

* `GET /api/orders`: obtener todas las órdenes de logística.
* `GET /api/orders/:id`: obtener una orden de logística por ID.
* `POST /api/orders`: crear una nueva orden de logística.
* `PUT /api/orders/:id`: actualizar una orden de logística.
* `DELETE /api/orders/:id`: eliminar una orden de logística.
