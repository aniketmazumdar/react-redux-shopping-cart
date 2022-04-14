
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from "react-bootstrap";
import {LoginContainer} from './login.style';
import InputField from '../../components/input-field/input-field.component';
import Button from '../../components/button/button.component';

import { login } from '../../redux/action/user.action';
import { selectMessage, selectIsLoading, selectIsSuccess } from '../../redux/selector/user.selector';


export default function Login() {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const isLoading = useSelector(selectIsLoading);
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0) {
      alert(message);
      resetFrmFlds();
    }
  }, [count]);

  const [frmFlds, setFrmFlds] = useState({
    email: '',
    password: '',
  });

  const resetFrmFlds = () => {
    setFrmFlds({
      email: '',
      password: '',
    });
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFrmFlds({ ...frmFlds, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    let payload = frmFlds;

    try {
      dispatch(login(payload));
      setCount(prev => prev + 1);
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };



  return (
    <LoginContainer>
      <Row>
        <Col xs={6} md={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
            <h1>Login</h1>
            <h6>Get access to your Orders. Wishlist and Recommendations</h6>
        </Col>
        <Col xs={6} md={5} lg={4}>
          <form onSubmit={handleSubmit}>
            <InputField
              label='Email'
              type='email'
              required
              onChange={handleChange}
              name='email'
              value={frmFlds.email}
            />

            <InputField
              label='Password'
              type='password'
              required
              onChange={handleChange}
              name='password'
              value={frmFlds.password}
            />

            <Button type='submit' disabled={isLoading}>Log In</Button>
          </form>
        </Col>
      </Row>
    </LoginContainer>
  )
}
