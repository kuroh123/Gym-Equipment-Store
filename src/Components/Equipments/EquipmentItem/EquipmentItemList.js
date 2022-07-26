import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import EquipmentForm from "./EquipmentForm";
import classes from "./EquipmentItemList.module.css";

const EquipmentItemList = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `₹${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.equipment}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <EquipmentForm id={props.itemId} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default EquipmentItemList;
