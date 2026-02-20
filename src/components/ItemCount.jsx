import { useState, useEffect } from "react";
import '../css/ItemCount.css'

const ItemCount = ({ stock, onAdd, counter, setCounter, currentInCart, disabled }) => {
    const [forceDisabled, setForceDisabled] = useState(false);

    useEffect(() => {
        if (disabled) setForceDisabled(true);
    }, [disabled]);

    const sumar = () => {
        if(counter + currentInCart < stock && !forceDisabled) {
            setCounter(counter + 1)
        }
    }

    const restar = () => {
        if(counter > 1 && !forceDisabled) {
            setCounter(counter - 1)
        }
    }

    const comprar = () => {
        onAdd(counter);
        setForceDisabled(true); // Deshabilita todos los botones después de agregar
    }

    return (
        <div className="item-count-container">
            <div className="counter-wrapper">
                <button className="counter-btn minus" onClick={restar} disabled={forceDisabled}>−</button>
                <span className="counter-value">{counter}</span>
                <button className="counter-btn plus" onClick={sumar} disabled={forceDisabled}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={comprar} disabled={forceDisabled}>
                Agregar al Carro
            </button>
        </div>
    )
}

export default ItemCount