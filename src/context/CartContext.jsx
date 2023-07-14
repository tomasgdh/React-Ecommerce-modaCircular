import {useState, useEffect, createContext} from 'react'
import CustomMessage from '../components/CustomMessage/CustomMessage'

// 1 - CREAMOS EL CONTEXTO => CartContext y lo expusimos con un export
// 2 - CREAR EL COMPONENTE PROVIDER tambien lo expusimos para implementarlo como un HOC (high order Component)
// 3 - RETONAR NUESTRO CONTEXT  (CartContext) CON UN .PROVIDER
// 4 - RECIBIR CHILDREN Y USAR PROP VALUE PARA PASAR DATA Y LOGICA
//Creamos el contexto
export const CartContext = createContext();
//calculamos el valor inicial del Carrito
const initialState = JSON.parse(localStorage.getItem("cart")) || []

//Creamos el provider

// eslint-disable-next-line react/prop-types
export const CartProvider = ({children}) =>{ 
    const[cart,setCart] = useState(initialState); //seteamos el carrito con el valor inicial
    const[msg,setMsg] = useState("");
    const[mostarMsg,setMostarMsg] = useState(false);
    const[typeMessage,setTypeMessage] = useState("success");
    //cada vez que el carrito cambia de estado, actualiza el LocalStorage
    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    const addItemToCart = (item, quantity) => {        
        const newItem = { quantity, ...item}
        let replaced = false
        let isStockOk = false

        if(quantity <= item.stock)
            isStockOk = true
        const newCart = cart.map(product => {
            if(product.id === item.id){
                if(product.quantity + quantity <= item.stock)
                {
                    product.quantity +=quantity
                    replaced = true;
                    isStockOk = true
                }
                else
                isStockOk = false
            }
            return product
        })

        if(isStockOk){
            if(replaced){setCart(newCart)}
            else{setCart([...cart,newItem])}
            setMostarMsg(true);
            setTypeMessage("success");
            setMsg(`${item.name} fue agregado al carrito`);
        }
        else{
            setMostarMsg(true);
            setTypeMessage("error");
            setMsg(`${item.name} No pudo ser agregado, Stock insuficiente!`);
        }
    }
    const handlerCloseSnackBar = () => {
        setMostarMsg(false);
        setMsg("");
      };

    //devuelve la cantidad de productos del carrrtio
    const getProductsQuantity = () => {
        return cart.reduce((accum, item) => accum + item.quantity, 0)
    }
    //devuelve y calcula el precio total del carrito
    const getProductsTotalPrice = () => {
        return cart.reduce((accum, item) => accum + (item.quantity * item.price), 0)
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
            <CustomMessage 
                    openSb={mostarMsg}
                    typeMessage={typeMessage}
                    messageSnackBar={msg}
                    onCloseSnackbar={handlerCloseSnackBar}

         />
        </CartContext.Provider>
    )

}