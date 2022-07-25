import { Fragment } from "react";
import AvailableEquipment from "./AvailableEquipment";
import EquipmentSummary from "./EquipmentSummary";

const Equipments = () => {
  return (
    <Fragment>
      <EquipmentSummary />
      <AvailableEquipment />
    </Fragment>
  );
};

export default Equipments;
