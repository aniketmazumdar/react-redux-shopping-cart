import React from 'react'
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { CardContainer, ProductTitle, CardImage, CardContentWrapper, CardButtonContainer } from './product-card.style';
import Button from '../../components/button/button.component';
import { selectCartItems } from '../../redux/selector/cart.selector';
import { addItemToCart } from '../../redux/action/cart.action';

export default function ProductCard({prodInfo={}}) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
  
    const addProductToCart = () => dispatch(addItemToCart(cartItems, prodInfo));
    
    return (
        <CardContainer>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <ProductTitle>
                        {prodInfo.name}
                    </ProductTitle>
                </Col>

                <Col xs={12} md={6} lg={12}>
                    <CardImage src={require('../../' + prodInfo.imageURL)} />
                </Col>

                <Col xs={12} md={6} lg={12}>
                    <CardContentWrapper>
                        {prodInfo.description}
                    </CardContentWrapper>
                </Col>

                <Col xs={12} md={12} lg={12}>
                    <CardButtonContainer>
                        <Button type='button' onClick={addProductToCart}>Buy Now @ Rs. {prodInfo.price}</Button>
                    </CardButtonContainer>
                </Col>
            </Row>
        </CardContainer>
    )
}
