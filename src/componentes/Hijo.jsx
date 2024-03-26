import { useEffect, useState } from "react";

const Hijo = ({ datos , onAction }) => {
  const { nombre, vacas, imagen } = datos;

const [valoracion , setValoracion]= useState(0)
  const votar =()=>{
    setValoracion(valoracion+1)  
  }

  
useEffect(()=>{
    onAction(nombre , valoracion)

// eslint-disable-next-line react-hooks/exhaustive-deps
},[valoracion])

 

  return (
    <>
      <div className="cadarey">
        <h1>{nombre}</h1>
      <div className="menu"> Come {vacas} vacas al dia</div>
      <div className="imagen">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="cajaVotacion">
        <button onClick={votar}>Votar</button>
      </div>
      <div className="votacion"> {valoracion} </div>
      </div>
    </>
  );
};

export default Hijo;
