import React, {useState} from "react";
import {div, p, button} from 'bootstrap'
import './ItemCount.css'


const ItemCount = (props) => {

    const [count, setCount] = useState(1);
    
    function onAdd (sign) {
        if ((sign === '+') && (count < props.max)) {
            setCount(count+1);
        } else if ((sign === '-') && (count > props.min)) {
            setCount(count-1);
        }
    }

    return (
        <div>
            <h1>Habitación en suite - Refugio dorado</h1>
            <br />
            <p>Número de noches a alquilar</p>
            <br />

          <div className="counter-container d-flex flex-row justify-content-around align-items-center shadow mt-3">
            <button className="btn" onClick={() => onAdd('-')}> - </button> 
            <p className="count"> {count} </p>
            <button className="btn" onClick={() => onAdd('+')}> + </button>
          </div>
          <br/>
          <button type="button" class="btn btn-success" onClick={() => setCount(0)}> Limpiar selección </button>

        </div>
    );


}

export default ItemCount;