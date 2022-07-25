import classes from "./AvailableEquipment.module.css";
import Card from "../UI/Card";
import EquipmentItemList from "./EquipmentItem/EquipmentItemList";

const DUMMY_EQUIPMENTS = [
  {
    id: "m1",
    name: "Light Dumbells",
    description: "Range from 2-10kg Dumbells",
    price: 5999,
  },
  {
    id: "m2",
    name: "Resistance Band: Black",
    description: "15-30kg resistance",
    price: 399,
  },
  {
    id: "m3",
    name: "Heavy Dumbells",
    description: "Range from 20-40kg Dumbells",
    price: 9999,
  },
  {
    id: "m4",
    name: "Rubber Hand Grip",
    description: "Save yourself from calluses",
    price: 299,
  },
];

const AvailableEquipment = () => {
  const itemsList = DUMMY_EQUIPMENTS.map((item) => (
    <EquipmentItemList
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));
  return (
    <section className={classes.equipments}>
      <Card>
        <ul>{itemsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableEquipment;
