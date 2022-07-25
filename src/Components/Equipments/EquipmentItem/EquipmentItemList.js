import classes from "./EquipmentItemList.module.css";

const EquipmentItemList = (props) => {
  const price = `₹${props.price}`;

  return (
    <li className={classes.equipment}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default EquipmentItemList;
