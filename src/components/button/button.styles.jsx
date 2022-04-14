import styled from 'styled-components';

const subColor = '#D70D42';

export const BaseButton = styled.button`
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${subColor};
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: ${subColor};
    border: 1px solid ${subColor};
  }
`;


export const SmallButton = styled(BaseButton)`
  width: auto;
  height: auto;
  line-height: 40px;
  padding: 0px 10px;
  font-size: 12px;
`;


export const CheckoutButton = styled(BaseButton)`
  justify-content: space-between;
  font-weight: bold;
  padding: 5px 25px;
  height: auto;
  font-size: 20px;
`;

export const CheckoutAltButton = styled(CheckoutButton)`
  justify-content: center;
`;
