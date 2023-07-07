import {useState, useEffect, createContext} from 'react'
import CustomizedSnackbars from '../components/SnackBar/SnackBar'

// 1 - CREAMOS EL CONTEXTO => CartContext y lo expusimos con un export
// 2 - CREAR EL COMPONENTE PROVIDER tambien lo expusimos para implementarlo como un HOC
// 3 - RETONAR NUESTRO CONTEXT  (CartContext) CON UN .PROVIDER
// 4 - RECIBIR CHILDREN Y USAR PROP VALUE PARA PASAR DATA Y LOGICA
//Creamos el contexto
export const CartContext = createContext();
//calculamos el valor inicial del Carrito
const init = JSON.parse(localStorage.getItem("cart")) || []

//Creamos el provider

// eslint-disable-next-line react/prop-types
export const CartProvider = ({children}) =>{ 
    const[cart,setCart] = useState(init); //seteamos el carrito con el valor inicial
    const[msg,setMsg] = useState("");
    const[isAdd,setIsAdd] = useState(false);
    //cada vez que el carrito cambia de estado, actualiza el LocalStorage
    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    const addItemToCart = (item, quantity) => {        
        const newItem = { quantity, ...item}
        let replaced = false
        const newCart = cart.map(product => {
            if(product.id === item.id){
                product.quantity +=quantity
                replaced = true;
            }
            return product
        })

        if(replaced){setCart(newCart)}
        else{setCart([...cart,newItem])}
        setIsAdd(true);
        setMsg(`${item.name} fue agregado al carrito`);
    }
    const handlerCloseSnackBar = () => {
        setIsAdd(false);
        setMsg("");
      };

    //devuelve la cantidad de productos del carrrtio
    const getProductsQuantity = () => {
        return cart.reduce((accum, item) => accum + item.quantity, 0)
    }
    //devuelve y calcula el precio total del carrito
    const getProductsTotalPrice = () => {
        return cart.reduce((accum, item) => accum + (item.quantity * item.price1), 0)
    }
    //devolvemos el carrito
    const getCart = () => {
        return cart
    }
    //Eliminamos un item del carrito
    const deleteItem = (id) => {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }
    //limpiamos el carrito
    const clearCart = () => {
        setCart([]);
        console.log("clearCart");
    }

    const value = {
        cart,
        addItemToCart,
        getProductsQuantity,
        getCart,
        getProductsTotalPrice,
        deleteItem,
        clearCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
            <CustomizedSnackbars 
                    openSb={isAdd}
                    typeMessage='success'
                    messageSnackBar={msg}
                    onCloseSnackbar={handlerCloseSnackBar}

         />
        </CartContext.Provider>
    )

}