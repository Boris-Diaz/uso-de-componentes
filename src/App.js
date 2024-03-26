import { useState } from "react";
import Hijo from "./componentes/Hijo";

function App() {
const [mensaje, setMensaje]=useState("Vota por tu rey favorito")
const sumar=(nombre,valoracion )=>{
 
setMensaje(<div>Has votado por el rey <span className="rojo"> {nombre} </span> con una valoracion de <span className="rojo">{valoracion} </span></div>)
}

  return (
    <> 

     <div className="mensaje"> <h2> {mensaje}</h2> </div> 
     
      <div className="contenedor">
        <Hijo onAction={sumar}
          datos={{
            nombre: "Ervigio",
            vacas: 3,
            imagen: "https://www.html6.es/img/rey_ervigio.png",
          }}
        />
        <Hijo onAction={sumar}
          datos={{
            nombre: "Atanagildo",
            vacas: 9,
            imagen: "https://www.html6.es/img/rey_atanagildo.png",
          }}
        />
        <Hijo onAction={sumar}
          datos={{
            nombre: "Ataulfo",
            vacas: 6,
            imagen: "https://www.html6.es/img/rey_ataulfo.png",
          }}
        />
        <Hijo onAction={sumar}
          datos={{
            nombre: "Leogivildo",
            vacas: 15,
            imagen: "https://www.html6.es/img/rey_leogivildo.png",
          }}
        />
      </div>
    </>
  );
}

export default App;
