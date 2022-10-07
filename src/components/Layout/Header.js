import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return <HeaderCartButton onClick={props.onShowCart} />;
};

export default Header;
