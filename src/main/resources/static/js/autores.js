async function listarAutores(){

    let json = await fetchAutores()
    let html = ""
    json.forEach(autor =>{
        html += `<tr>
                     <td>${autor.nombre}</td>
                     <td>${autor.pais}</td>

                     <td>
                         <a href="#" onclick="verLibrosPorAutor(1)" class="btn btn-info btn-icon-split">
                             <span class="text">Ver libros</span>
                         </a>

                     </td>

                 </tr>`
    });

    document.getElementById("tablaAutor").outerHTML=html;
}

listarAutores()