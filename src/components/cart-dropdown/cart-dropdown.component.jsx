import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { CardContainer, CartTitleWrapper, CardButtonWrapper, CartItemWrapper, EmptyCartWrapper, CardImage } from './cart-dropdown.style';
import Button from '../../components/button/button.component';
import CartItem from '../cart-items/cart-item.component';
import { selectCartItems, selectCartCount, selectCartTotal, selectIsCartOpen } from '../../redux/selector/cart.selector';
import { setIsCartOpen } from '../../redux/action/cart.action';
import lowestPriceImg from '../../assets/img/lowest-price.png';
 

export default function CartDropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const totalCartItemCount = useSelector(selectCartCount);
  const totalCartItemPrice = useSelector(selectCartTotal);
  const isCartDropdownShow = useSelector(selectIsCartOpen);

  const toggleCartDropdown = () => dispatch(setIsCartOpen(!isCartDropdownShow));

  const goToRedirectPage = (page) => {
    toggleCartDropdown();
    navigate(page);
  };


  return (
    <CardContainer>
        <CartTitleWrapper>
          <span class="subtitle">My Cart</span> {totalCartItemCount > 0 && <span class="cartitemcount">({totalCartItemCount} item{totalCartItemCount > 1 && 's'})</span>}
        </CartTitleWrapper>

        <CartItemWrapper>
          {
            cartItems.length ? 
            <>
              {
                cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
              }
              <Container className='LowestPriceWrapper'>
                <div>
                  <CardImage src={lowestPriceImg} />
                  <span>You won't find it cheaper anywhere</span>
                </div>
              </Container>
            </> : (
              <EmptyCartWrapper>
                <div>
                  <h4>No items in your cart</h4>
                  <h6>Your favorite items are just a click away</h6>
                </div>
              </EmptyCartWrapper>
            )
          }
        </CartItemWrapper>

        <CardButtonWrapper>
          {
            totalCartItemCount > 0 ?
              <>
                <h6>Promo code can be applied on payment page</h6>
                <Button type='button' btnType="checkout" onClick={() => goToRedirectPage('checkout')}>
                  <span>Proceed to Checkout</span>
                  <span>Rs.{totalCartItemPrice} ></span>
                </Button>
              </>
              :
              <Button type='button' btnType="checkout-alt" onClick={() => goToRedirectPage('shop')}>
                <span>Start Shopping</span>
              </Button>
          }
        </CardButtonWrapper>
    </CardContainer>
  )
}
