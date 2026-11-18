# API Productos

API REST Dotenv, Express y MySQL para administrar los datos de una tienda (base de datos "tiendaperu").

## Qué se ha realizado

- Módulo de productos: listar, obtener, crear, actualizar y eliminar.
- Módulo de clientes: nueva tabla "clientes" con 3 registros de prueba, controlador (cliente.controller.js) y (cliente.routes.js) con las mismas 5 operaciones.
- Módulo de proveedores: nueva tabla "proveedores" con 3 registros de prueba, controlador (proveedor.controller.js) y (proveedor.routes.js) con las mismas 5 operaciones.
- El archivo routes/index.js agrupa las rutas: /api/productos, /api/clientes y /api/proveedores.
- Pruebas realizadas con Postman.

## Tablas

```sql
// TABLA PRODUCTOS
CREATE TABLE IF NOT EXISTS productos
(
	id			INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    marca		VARCHAR(100)		NOT NULL,
    descripcion		VARCHAR(200)	NOT NULL,
    precio		DECIMAL(10,2)		NOT NULL,
    stock		INT UNSIGNED		NOT NULL DEFAULT 0,
    create_at	DATETIME			NOT NULL DEFAULT NOW(),
    update_at	DATETIME			NULL
)ENGINE = INNODB;

// TABLA CLIENTES
CREATE TABLE IF NOT EXISTS clientes
(
id				INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
apellidos		VARCHAR(100) NOT NULL,
nombres			VARCHAR(100) NOT NULL,
telefono		char(9) NOT NULL,
direccion		VARCHAR(200) NOT NULL,
email			VARCHAR(150) NOT NULL,
create_at	DATETIME			NOT NULL DEFAULT NOW(),
update_at	DATETIME			NULL
)ENGINE = INNODB;

// TABLA PROVEEDORES
CREATE TABLE IF NOT EXISTS proveedores
(
id				INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
razonsocial		VARCHAR(200) NOT NULL,
contacto		VARCHAR(100) NOT NULL,
ruc				CHAR(11) NOT NULL,
direccion		VARCHAR(200) NOT NULL,
create_at	DATETIME			NOT NULL DEFAULT NOW(),
update_at	DATETIME			NULL
)ENGINE = INNODB;

```

## Estructura de configuración

PORT=3000
DB_HOST=
DB_PORT=3306
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_CONNECTION_LIMIT=10

## Rutas (http://localhost:3000/api)

- GET /clientes y GET /clientes/:id
- POST /clientes
- PUT /clientes/:id
- DELETE /clientes/:id

Lo mismo para /productos y /proveedores.
