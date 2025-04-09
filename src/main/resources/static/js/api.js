
const API_BASE_URL = "http://localhost:8080/api";

async function fetchAutores(){
    let response = await fetch(`${API_BASE_URL}/autores`,{
        method:"GET",
        headers:{
            "ConteContent-Type":"application/json"
        }
    });

    return await response.json()
}

async function saveLibro(libro){
    let url = `${API_BASE_URL}/libros`;
    if(!isNew()){
        url += "/" + getLibroId()
    }
    let metodoType = isNew() ? "POST" : "PUT"
    let config = {
        method:metodoType,
        body: JSON.stringify(libro),
        headers:{
            "Content-Type": "application/json"
        }
    }

    await fetch(url,config);
    alert("Libro guardado con EXITO")
    window.location.href = "tables.html"
}

async function getLibroById(id){
    let response = await fetch(`${API_BASE_URL}/libros/${id}`,{
            method:"GET",
            headers:{
                "ConteContent-Type":"application/json"
            }
    });

    return await response.json();
}

async function getCategorias(){
    let response = await fetch(`${API_BASE_URL}/libros/categorias`,{
                method:"GET",
                headers:{
                    "ConteContent-Type":"application/json"
                }
    });

    return await response.json();
}