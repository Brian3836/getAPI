const contenedor = document.querySelector('#app')
const btn = document.querySelector('button')
const servidor = 'https://pokeapi.co/api/v2/pokemon?limit=1'
let url = location.search
let id = location.search.split('=')[1]

btn.addEventListener('click', () =>{
    location.href = 'index.html'
})


    console.log('id' +  id)
    const endPoint = servidor+ 'v2'


    fetch ( endPoint )
    .then (respuesta => {
        return respuesta.json()
    }) 

    .then (respuestaJSON => {
        console.log(respuestaJSON.results)//DUDA: no me marca la lista de usuarios (pokemones), me sale com 'UNDEFINDED' en la consola del navagador
        let datos  = respuestaJSON.results

        renderizar(datos)
        
    })


    function renderizar(datos){
        console.log(datos)
        let html = '';
        
        html += `<div class="card">
                    <h4>${id.name}</h4>
                    
                       
                        
                  
                </div>`;

        contenedor.innerHTML = html;
    }