import { useState } from "react";
import '../css/ItemCount.css'

const ItemCount = ({ stock, onAdd, counter, setCounter, currentInCart, disabled }) => {

    const sumar = () => {
        if(counter + currentInCart < stock) {
            setCounter(counter + 1)
        }
    }

    const restar = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }
    }

    const comprar = () => {
        onAdd(counter)
    }

    return (
        <div className="item-count-container">
            <div className="counter-wrapper">
                <button className="counter-btn minus" onClick={restar} disabled={disabled}>−</button>
                <span className="counter-value">{counter}</span>
                <button className="counter-btn plus" onClick={sumar} disabled={disabled}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={comprar} disabled={disabled}>
                Agregar al Carro
            </button>
        </div>
    )
}

export default ItemCount