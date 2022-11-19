import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from "react-bootstrap";
import {RegisterContainer} from './register.style';
import InputField from '../../components/input-field/input-field.component';
import Button from '../../components/button/button.component';

import { registration } from '../../redux/action/user.action';
import { selectMessage, selectIsLoading, selectIsSuccess } from '../../redux/selector/user.selector';


export default function Register() {
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const isLoading = useSelector(selectIsLoading);
  const isSuccess = useSelector(selectIsSuccess);
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0) {
      alert(message);
      
      if (isSuccess) {
        resetFormFields();
      }
    }
  }, [count]);

  const [frmFlds, setFrmFlds] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });


  const resetFormFields = () => {
    setFrmFlds({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };


  const handleChangeEvent = (event) => {
    const { name, value } = event.target;
    setFrmFlds({ ...frmFlds, [name]: value });
  };


  const handleSubmitEvent = async (event) => {
    event.preventDefault();

    if (frmFlds.password !== frmFlds.confirmPassword) {
      alert('passwords do not match');
      return;
    }


    const payload = {
      firstName: frmFlds.firstName,
      lastName: frmFlds.firstName,
      email: frmFlds.email,
      password: frmFlds.password,
    }

    try {
      dispatch(registration(payload));
      setCount(prev => prev + 1);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };


  return (
    <RegisterContainer>
      <Row>
        <Col xs={6} md={{ span: 5, offset: 1 }} lg={{ span: 5, offset: 1 }}>
            <h1>Signup</h1>
            <h6>We do not share your personal details with anyone.</h6>
        </Col>
        <Col xs={6} md={5} lg={4}>
          <form onSubmit={handleSubmitEvent}>
            <InputField
              label='First Name'
              type='text'
              required
              onChange={handleChangeEvent}
              name='firstName'
              value={frmFlds.firstName}
            />

            <InputField
              label='Last Name'
              type='text'
              required
              onChange={handleChangeEvent}
              name='lastName'
              value={frmFlds.lastName}
            />

            <InputField
              label='Email'
              type='email'
              required
              onChange={handleChangeEvent}
              name='email'
              value={frmFlds.email}
            />

            <InputField
              label='Password'
              type='password'
              required
              onChange={handleChangeEvent}
              name='password'
              value={frmFlds.password}
            />

            <InputField
              label='Confirm Password'
              type='password'
              required
              onChange={handleChangeEvent}
              name='confirmPassword'
              value={frmFlds.confirmPassword}
            />

            <Button type='submit' disabled={isLoading}>Sign Up</Button>
          </form>
        </Col>
      </Row>
    </RegisterContainer>
  )
}