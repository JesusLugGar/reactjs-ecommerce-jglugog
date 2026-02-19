import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const cartLS = JSON.parse(localStorage.getItem('cart')) || [];

export const CartProvider = ({ children }) => {

const [cart, setCart] = useState(cartLS);

useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])


    //funcion agregar un item al carrito (ESTE SE AGREGA EN EL ITEMDETAIL componente)
    const addItem = (item, qty) => {
        if(isInCart (item.id)){            
            setCart(cart.map((prod) => {
                if (prod.id === item.id && prod.selectedSize === item.selectedSize) {
                    if (prod.quantity + qty > prod.stock) {
                        Swal.fire({
                            icon: "error",
                            title: "Stock insuficiente",
                            text: `Solo puedes agregar hasta ${prod.stock} unidades de este producto.`,
                        });
                        return prod;
                    }
                    return { ...prod, quantity: prod.quantity + qty };
                }
                return prod;
            }));
        } else {
            setCart([...cart, { ...item, quantity: qty }]);
        }
    };

    //disminuir cantidad de un item en el carrito
    const decreaseItem = (id) => {
        setCart(cart.map((prod) => 
            prod.id === id 
                ? {...prod, quantity: prod.quantity > 1 ? prod.quantity - 1 : 1} 
                : prod
        ))
    }

    const clearCart = () => {
        setCart([]);
    }

    //remover un item del carrito(ESTO SERA EN EL COMPONENTE CART)
    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    //funcion true/false para saber si hay algo en el carro
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    }
    
    const totalPrice = () => {
        return cart.reduce((acc, item)=> acc += (item.quantity * item.price), 0)
        
    }
  
    const totalIva = () => {
        return totalPrice() * 0.19;
    }

    //la funcion que sume cantidades
    const totalQuantity = () => {
        return cart.reduce ((acc, item) => acc += item.quantity, 0)

    }

    return (
        <CartContext.Provider value={{ cart, addItem, decreaseItem, clearCart, removeItem, isInCart, totalPrice, totalIva, totalQuantity }}> 
            {children}
        </CartContext.Provider>

    )
}