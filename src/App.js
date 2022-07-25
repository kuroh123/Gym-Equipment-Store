import { Fragment } from "react";
import Equipments from "./Components/Equipments/Equipments";
import Header from "./Components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Equipments />
      </main>
    </Fragment>
  );
}

export default App;
