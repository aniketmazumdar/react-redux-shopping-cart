import {
  BaseButton,
  SmallButton,
  CheckoutButton,
  CheckoutAltButton
} from './button.styles';


const getButton = (buttonType = 'base') =>
  ({
    ['base']: BaseButton,
    ['small']: SmallButton,
    ['checkout']: CheckoutButton,
    ['checkout-alt']: CheckoutAltButton,
  }[buttonType]);

const Button = ({ children, btnType, ...otherProps }) => {
  const CustomButton = getButton(btnType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
