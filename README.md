# API BIBLIOTECA

Esta Api permite gestionar una coleccion de libros, acontinuacion se describe los 
endpoints disponibles.

## Endpoints
### Obtener todos los libros

#### GET  "/api/libros"

**Descripcion:** Devuelve una lista de todos los libros.

**Respuesta Exitosa:**
- **Codigo:** 200 OK.
- **Cuerpo:** Array de Objetos Libro

- Ejemplo de Respuesta:

     ``` json
      [
          {
              "id": 1,
              "titulo":"Cien años de soledad",
              "categoria": "novela",
              "disponible": true,
              "autor":{
                  "id": 1,
                  "nombre":"Gabriel Garcia Marquez",
                  "pais": "Colombia"
              }
          }
      ]

      ```

### Obtener un Libro por ID
#### GET  "/api/libros/{id}"
**Descripcion:** Devuelve el libro del ID proporcionado.

**Parámetros:**
- **Path Variable:** {id} (Long) - ID del libro

**Respuesta Exitosa:**
- **Codigo:** 200 OK.
- **Cuerpo:** Objeto Libro

**Respuesta en caso de no encontrar el libro:**
- **Codigo:** 404 Not Found



### Crear un Nuevo Libro
#### POST  "/api/libros/"
**Descripcion:** Guarda libro en Base de datos.

**Cuerpo de la solicitud:**
- **Tipo:** JSON
- **Ejemplo:** 

  ``` json
        [
            {
                "id": 1,
                "titulo":"Cien años de soledad",
                "categoria": "novela",
                "disponible": true,
                "autor":{
                    "id": 1
                }
            }
        ]
      
**Respuesta Exitosa:**
- **Codigo:** 200 OK.
- **Cuerpo:** Objeto Libro


### Obtener todos los autores
#### GET  "/api/autores/"

**Descripcion:** Devuelve una lista de todos los autores.

**Respuesta exitosa:**
- **Codigo:** 200 OK.
- **Cuerpo:** Array de Objetos Autor
- **Ejemplo de Respuesta:**

  ``` json
        [
            {
                "id": 1,
                "nombre":"Gabriel Garcia Marquez",
                "pais": "Colombia"
            }
        ]
