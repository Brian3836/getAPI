/* const btn = document.querySelector('button');
const contenedor = document.querySelector('#app')
const servidor = "https://pokeapi.co/api/" // creamos una constante 'SERVIDOR' que para acceder a lista de pokemones 

btn.addEventListener('click', function(){
    //console.log('Se hizo click en el boton')
    const endPoint = servidor+ "v2" //accedemos al pokemon simple concatenando con el servidor
    
    fetch (endPoint)
    .then (respuesta => {
        console.log(respuesta)
        return respuesta.json()
    })
    .then(respuestaJSON => {
        let datos = respuestaJSON.data
        console.log(respuestaJSON.data) //DUDA: no me marca la lista de usuarios (pokemones), me sale com 'UNDEFINDED' en la consola del navagador
        renderizar(datos)
    })
})


function renderizar(lista){
    console.log(lista)
    let html = '';
    lista.forEach(pokemon => {
        html += `<div class="card">
                    <h4>Bulbasaur</h4>
                    <p>Habilidad: crecer demasiado</p>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur">
                    
                </div>`;
    });

    contenedor.innerHTML = html;
} 
 */



const contenedor = document.querySelector('#app')
const btn = document.querySelector('button')
const servidor = 'https://pokeapi.co/api/v2/pokemon?limit=100'

btn.addEventListener('click', function(){
    console.log('Se hizo click en el boton')
    const endPoint = servidor


    fetch ( endPoint )
    .then (respuesta => {
        return respuesta.json()
    }) 

    .then (respuestaJSON => {
        console.log(respuestaJSON.results)//DUDA: no me marca la lista de usuarios (pokemones), me sale com 'UNDEFINDED' en la consola del navagador
        let datos  = respuestaJSON.results
        renderizar(datos)
    })

    
})




function renderizar(listadepokemones){
    console.log(listadepokemones)
    let html = '';
    listadepokemones.forEach(v2 => { // No se cargan los pokemones
        html += `<div class="card">
                    <h4>${v2.name}</h4>
                   
                    
                    <a href="detalle.html?id=${v2.name}">Ver detalles</a>
                </div>`;
    });

    contenedor.innerHTML = html;
}