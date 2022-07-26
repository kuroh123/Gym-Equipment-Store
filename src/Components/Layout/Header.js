import { Fragment } from "react";
import classes from "./Header.module.css";
import coverImage from "../../assets/Equipment.jpg";
import HeaderCart from "./HeaderCart";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Gym Store</h1>
        <HeaderCart onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src={coverImage}
          alt="All Kinds Of Gym Equipment Available Here!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
