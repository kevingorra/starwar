//consuminedo apis

//1. pa donde voy 

const URI = "https://swapi.dev/api/films/"

// 2. configurar la peticion

const PETICION={
    method :"GET",
    headers:{
       
    }
}

//3. consumo la api

fetch(URI,PETICION)
.then(function(respuesta){

    return respuesta.json()

})
.then(function(respuesta){

    let tabla =document.getElementById('tabla')

    console.log(respuesta.results)

    respuesta.results.forEach(function(objeto){

        console.log(objeto.title)
        console.log(objeto.director)
        console.log(objeto.producer)

        let filas =document.createElement('tr')
        let columna1=document.createElement('td')
        columna1.textContent=objeto.title
        let columna2=document.createElement('td')
        columna2.textContent=objeto.director
        let columna3=document.createElement('td')
        columna3.textContent=objeto.producer
        let columna4=document.createElement('td')
        columna4.textContent=objeto.release_date
      
        fetch(objeto.species[4],PETICION)
        .then(function(respuesta){
          return  respuesta.json()
            
        })
        .then(function(respuesta){
            console.log(respuesta.name)

            let columna5=document.createElement('td')
            columna5.textContent= respuesta.name
        
            
            
            filas.appendChild(columna1)
            filas.appendChild(columna2)
            filas.appendChild(columna3)
            filas.appendChild(columna4)
            filas.appendChild(columna5)
            tabla.appendChild(filas)
        })
       

    })
    
  


    
})
.catch(function(respuestaError){
    console.log(respuestaError)
})