
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from "react-bootstrap";
import { NavigationContainer, NavLinks, NavLink, LogoContainer, CartLogoContainer, CartImage } from './header.style';

import Logo from '../../assets/img/logo.png';
import CartImg from '../../assets/img/cart.svg';

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCartCount, selectIsCartOpen } from '../../redux/selector/cart.selector';
import { setIsCartOpen } from '../../redux/action/cart.action';
import { selectCurrentUser } from '../../redux/selector/user.selector';
import { logout } from '../../redux/action/user.action';


export default function Header() {

  const dispatch = useDispatch();
  const isCartDropdownShow = useSelector(selectIsCartOpen);
  const totalCartItemCount = useSelector(selectCartCount);
  const currentUser = useSelector(selectCurrentUser);

  const toggleCartDropdown = () => dispatch(setIsCartOpen(!isCartDropdownShow));
  const logoutHandler = () => dispatch(logout());


  return (
    <>
      <NavigationContainer bg="light">
        <Container>
          <Row>
            <Col xs={6} md={3} lg={3}>
              <LogoContainer>
                <img src={Logo} />
              </LogoContainer>
            </Col>
            <Col xs={6} md={6} lg={6}>
              <NavLinks>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/shop'>Products</NavLink>
              </NavLinks>
            </Col>
            <Col xs={6} md={3} lg={3}>
              <Row>
                {
                  currentUser == null ?
                  <NavLinks>
                    <NavLink to='/login'>Sign In</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                  </NavLinks>
                  :
                  <NavLinks>
                    <NavLink as='span' onClick={logoutHandler}>Sign Out</NavLink>
                  </NavLinks>
                }
              </Row>
              <Row>
                <CartLogoContainer onClick={toggleCartDropdown}>
                  <CartImage src={CartImg} /> {totalCartItemCount} item{totalCartItemCount > 1 && 's'}
                </CartLogoContainer>
              </Row>
            </Col>
          </Row>
        </Container>
      </NavigationContainer>

      {isCartDropdownShow && <CartDropdown />}
    </>
  );
};
