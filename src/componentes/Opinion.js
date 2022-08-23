import React from 'react';
import '../hoja-estilos/Opinion.css';

function Opinion(props) {
  return (
    <div className='main-container'>
      <img 
        className='img'
        src={require(`../imagenes/img${props.img}.jpg`)} //Inserto la imagen
        alt='Imagen de turista' />
      <div className='text-container'>
        <p className='tourist-name'>
          <strong>{props.fullname}</strong> 
        </p>
        <p className='tourist-country'>
          <strong>{props.country}</strong>  
        </p>
        <p className='tourist-opinion'>"{props.opinion}"</p>
      </div>
    </div>
  );    
}

export default Opinion;