# API REST NodeJS

## Descripción

API REST desarrollada con Node.js, Express y Firebase Firestore para la gestión de productos.

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-ejemplo .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

## Documentación de la API

- **GET** `/productos`
- **Descripción** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
    { id: 1, nombre: "Auriculares inalámbricos", precio: 18500, stock: 12, categoria: "Electrónica" },
    { id: 2, nombre: "Mate de acero", precio: 9500, stock: 30, categoria: "Hogar" },
    { id: 3, nombre: "Teclado mecánico", precio: 42000, stock: 7, categoria: "Informática" },
]
```

### Buscar productos por nombre

- **GET** `/productos/search?nombre=palabra`
- **Descripción** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámentros:**
    - `nombre` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/productos/search?nombre=auriculares`
- **Respuesta ejemplo:**

```json
[{ id: 1, nombre: "Auriculares inalámbricos", precio: 18500, stock: 12, categoria: "Electrónica" }]
```

### Obtener producto por ID

- **GET** `/productos/:id`
- **Descripción** Devuelve un producto específico por su ID.
- **Parámentros:**
    - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/productos/E1DxVZvSSAyc4162gYl9`
- **Respuesta ejemplo:**

```json
{
    "id": "E1DxVZvSSAyc4162gYl9",
    "nombre": "producto 1",
    "precio": 100,
    "categoria": [
        "categoria 1",
        "categoria 2"
    ]
}
```

### Crear un producto

- **POST** `/productos`
- **Descripción** Crea un nuevo producto.
- **Body (JSON):**

```json
{
        "categoria": [
            "categoria 1",
            "categoria 2"
        ],
        "nombre": "producto 1",
        "precio": 100
}
```

- **Respuesta ejemplo:**

```json
{
    "id": "E1DxVZvSSAyc4162gYl9",
    "nombre": "producto 1",
    "precio": 100,
    "categoria": [
        "categoria 1",
        "categoria 2"
    ]
}
```