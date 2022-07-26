import classes from "./HeaderCart.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";

const HeaderCart = (props) => {
  const [btnIsHighlighted, setBtnISHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const totalNumberOfItem = items.reduce((currentSum, item) => {
    return currentSum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnISHighlighted(true);

    const timer = setTimeout(() => {
      setBtnISHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalNumberOfItem}</span>
    </button>
  );
};

export default HeaderCart;
