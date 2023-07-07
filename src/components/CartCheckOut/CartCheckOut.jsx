import { useContext } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Box, Typography, Button,} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

//Contexto
import { CartContext } from '../../context/CartContext';

const CartCheckOut = () => {
  const { getCart, getProductsTotalPrice, deleteItem, clearCart } = useContext(CartContext)
  let path = "/Static/Images/";
  const cart = getCart();
  const handleDelete = (id) => {
      deleteItem( id )
  }
  console.log("cart:",cart)  
  console.log("cartLen:",cart.length) 
  console.log("cart1:",cart[0])
  console.log("cart1:", cart.length > 0 ?? cart[0].price1 * cart[0].quantity)
  return (
    <div style={{ display: 'flex',}}>
      <TableContainer style={{marginTop:"25px", marginRight:"10px"}} md="8" component={Paper}>
        <Table>
          <TableHead>
            <TableRow  style={{backgroundColor:"#1976d2",}} >
              <TableCell style={{fontWeight: 'bold',  color:"white"}}>Imagen</TableCell>
              <TableCell style={{fontWeight: 'bold',  color:"white"}}>Producto</TableCell>
              <TableCell style={{fontWeight: 'bold',  color:"white"}}>Cantidad</TableCell>
              <TableCell style={{fontWeight: 'bold',  color:"white"}}>Precio</TableCell>
              <TableCell style={{fontWeight: 'bold',  color:"white"}}>Total</TableCell>
              <TableCell style={{fontWeight: 'bold',  color:"white"}}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>            
        {                                      
            cart.length > 0 ?
            cart.map(item => {
              {console.log("item",item)}
                   return <TableRow key={item.id}>
                        <TableCell>
                            <Link to={`/detail/${item.id}`}>
                                <img src={path + item.img} alt="" width="50"/>
                            </Link>
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>$ {item.price1.toLocaleString("es-AR")}</TableCell>
                        <TableCell>$ {(item.price1 * item.quantity).toLocaleString("es-AR")}</TableCell>
                        <TableCell>
                            <Button size="small" color="secondary" onClick={() => handleDelete(item.id)}>
                                <DeleteIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                                                           
            })                                            
            :                                                    
            <TableRow>
                <TableCell colSpan="6" className="text-center">
                    No hay productos en el carrito
                </TableCell>
            </TableRow>
        }
                <TableRow>
                <TableCell colSpan="4" style={{textAlign:"right"}} >
                    <strong>Total:</strong>
                </TableCell>
                <TableCell>$ { getProductsTotalPrice().toLocaleString("es-AR") } </TableCell>
                <TableCell>
                {
                    cart.length > 0 &&                                  
                    <Button variant="contained" color="primary" onClick={ clearCart } >
                        Vaciar carrito
                    </Button>
                }                                                                                                
                </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{borderRadius:"5px"}}>
        <Table style={{marginTop:"25px", minWidth:"200px"}}>
          <TableHead>
            <TableRow  style={{backgroundColor:"#1976d2",}} >
              <TableCell style={{fontWeight: 'bold',  color:"white",textAlign:"center"}}>Resumen de compra</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
                <TableCell style={{textAlign:"center"}}>{`Total a pagar: $${getProductsTotalPrice().toLocaleString("es-AR")}`}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{textAlign:"center"}}>
                  <Button variant="contained" color="primary">
                    Pagar
                  </Button>                                                                                           
                </TableCell>
            </TableRow> 
          </TableBody>
        </Table>
      </div> 
    </div>
  );
};

export default CartCheckOut;