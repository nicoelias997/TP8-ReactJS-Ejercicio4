import React, { useEffect, useState } from "react";


import Frase from "./components/Frase";

function App() {

  const [personaje, setPersonaje] = useState({})

  useEffect(() => {
    obtenerFrase()
  }, [])

  const obtenerFrase = async () => {
    try{
      const res = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      const data = await res.json()
      setPersonaje({
        caracter: data[0].character,
        frase: data[0].quote,
        imagen: data[0].image
      })
      console.log(personaje)
    } catch(e){
      console.log(e)
      return
    }
  }

  return (
    <div className="card bg-danger border border-secondary">
    
      <div className="container">
      <div className="d-flex justify-content-center align-content-center row">
        <div className="card-img-top d-flex justify-content-center">
          <img src="https://trello.com/1/cards/63288a1289c67400fd5b534f/attachments/632b24ad1ed8b700597e4050/previews/632b24ae1ed8b700597e418b/download/theSimpson.png" style={{width:"80%"}} className="p-3" alt="Los simpsons titulo" />
        </div>
          <button 
          type="button" 
          className="btn btn-warning text-dark btn-sm col-3 mt-5 mb-5"
          onClick={() => obtenerFrase()}>
            Obtener frase
          </button>
        </div>
        <Frase caracter={personaje.caracter} frase={personaje.frase} imagen={personaje.imagen}></Frase>
    </div>
    </div>

  );
}

export default App;
