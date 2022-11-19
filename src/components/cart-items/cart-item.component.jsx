import React from 'react';
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { CardContainer, CardImgWrapper, CardImage } from './cart-item.style';
import { addItemToCart, removeItemFromCart } from '../../redux/action/cart.action';
import { selectCartItems } from '../../redux/selector/cart.selector';


export default function CartItem({cartItem={}}) {
    const dispatch = useDispatch();
    const allCartItems = useSelector(selectCartItems);
  
    const addProductToCart = () => dispatch(addItemToCart(allCartItems, cartItem));
    const removeProductToCart = () => dispatch(removeItemFromCart(allCartItems, cartItem));

    return (
        <CardContainer>
            <Row>
                <Col xs={3} md={3} lg={2}>
                    <CardImgWrapper>
                        <CardImage src={require('../../' + cartItem.imageURL)} />
                    </CardImgWrapper>
                </Col>

                <Col xs={9} md={9} lg={10}>
                        <h5>{ cartItem.name }</h5>
                        <div className='cartContent'>
                            <div>
                                <a role="button" onClick={addProductToCart}>
                                    <i class="bi bi-plus-circle-fill mr-3"></i>
                                </a>
                                
                                <span>{ cartItem.quantity }</span>

                                <a role="button" onClick={removeProductToCart}>
                                    <i class="bi bi-dash-circle-fill ml-3"></i>
                                </a>

                                <span className='ml-3 mr-3'>X</span>

                                <span>Rs.{ cartItem.price }</span>
                            </div>

                            <div>
                                <span>Rs.{ cartItem.price * cartItem.quantity }</span>
                            </div>
                        </div>
                        
                </Col>
            </Row>
        </CardContainer>
    )
}
