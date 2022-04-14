import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { TableContainer, CardImage } from './checkout.style';
import { selectCartItems, selectCartTotal } from '../../redux/selector/cart.selector';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../redux/action/cart.action';

export default function Checkout() {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const totalCartItemPrice = useSelector(selectCartTotal);
  const clearCartItems = (selectedItem) => dispatch(clearItemFromCart(cartItems, selectedItem));
  const addProductToCart = (selectedItem) => dispatch(addItemToCart(cartItems, selectedItem));
  const removeProductToCart = (selectedItem) => dispatch(removeItemFromCart(cartItems, selectedItem));

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>NAME</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            cartItems.length ? 
              cartItems.map((item) => (
                <tr>
                  <td><CardImage src={require('../../' + item.imageURL)} /></td>
                  <td>{ item.name }</td>
                  <td>
                    <a role="button" onClick={() => addProductToCart(item)}>
                        <i class="bi bi-plus-circle-fill mr-3"></i>
                    </a>
                                
                    <span>{ item.quantity }</span>

                    <a role="button" onClick={() => removeProductToCart(item)}>
                        <i class="bi bi-dash-circle-fill ml-3"></i>
                    </a>
                  </td>
                  <td>{ item.price }</td>
                  <td>
                    <a role="button" onClick={() => clearCartItems(item)}>
                      X
                    </a>
                  </td>
                </tr>
              ))
            : 
            <tr>
              <td colSpan={5}><h4 className='text-center mt-3'>No cart item found</h4></td>
            </tr>
          }
          
          <tr>
              <td colSpan={4} className='text-right'>TOTAL: </td>
              <td>RS. {totalCartItemPrice}</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  )
}
