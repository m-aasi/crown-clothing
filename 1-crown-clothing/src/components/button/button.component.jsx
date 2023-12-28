import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.jsx";

export const BTN_TYPE_CLASSES = {
  base: "base",
  inverted: "inverted",
  google: "google-sign-in",
};

function getButton(buttonType = BTN_TYPE_CLASSES.base) {
  return {
    [BTN_TYPE_CLASSES.base]: BaseButton,
    [BTN_TYPE_CLASSES.google]: GoogleSignInButton,
    [BTN_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType];
}
/*
export default function Button({
  type,
  children,
  buttonType,
  onClick,
  otherProps,
}) {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps} onClick={onClick}>
      {children}
    </CustomButton>
  );
}
*/

function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
}

export default Button;
