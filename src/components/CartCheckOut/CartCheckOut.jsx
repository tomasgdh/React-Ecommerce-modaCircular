import { useContext } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button,} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

//Contexto
import { CartContext } from '../../context/CartContext';

//CSS
import "../Card/ClothingCard.css";

const CartCheckOut = () => {
  const { getCart, getProductsTotalPrice, deleteItem, clearCart } = useContext(CartContext)
  const cart = getCart();
  const handleDelete = (id) => {
      deleteItem( id )
  }
  return (
    <div style={{ display: 'flex', marginTop:"20px"}}>
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
                   return <TableRow key={item.id}>
                        <TableCell>
                            <Link to={`/detail/${item.id}`}>
                                <img src={item.img} className="card-product" alt="" width="50"/>
                            </Link>
                        </TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>$ {item.price.toLocaleString("es-AR")}</TableCell>
                        <TableCell>$ {(item.price * item.quantity).toLocaleString("es-AR")}</TableCell>
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
      <div >
        <Table style={{marginTop:"25px", minWidth:"200px", border: "1px solid rgba(224, 224, 224, 1)", borderRadius:"5px"}}>
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