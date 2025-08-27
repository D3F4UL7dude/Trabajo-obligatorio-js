
// codigo de las noticias
window.onload=function(){

    fetch("assets/data/noticias.json")
    .then(respuesta => {
        if(!respuesta.ok){
            throw new Error("error al conseguir json");
        }
        return respuesta.json();
    })
    .then(lista_json => {
        lista_json.forEach(({imagen, titulo, descripcion, fecha, url}, index) => {
            const num = index + 1;

            document.getElementById(`imagen-articulo-${num}`).src = imagen;
            document.getElementById(`titulo-articulo-${num}`).textContent = titulo;
            document.getElementById(`descripcion-articulo-${num}`).textContent = descripcion;
            document.getElementById(`fecha-articulo-${num}`).textContent = fecha;
            document.getElementById(`link-articulo-${num}`).href = url;
            document.getElementById(`link-articulo-${num}`).target = "_blank";
        });
    })
    .catch(error =>{
        alert("Ocurrio un error " + error.message);
    });
};