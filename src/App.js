import { useState } from "react";
import CartProvider from "./store/CartProvider";
import Cart from "./Components/Cart/Cart";
import Equipments from "./Components/Equipments/Equipments";
import Header from "./Components/Layout/Header";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Equipments />
      </main>
    </CartProvider>
  );
}

export default App;
