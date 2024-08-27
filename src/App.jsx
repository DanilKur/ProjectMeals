import Header from "./assets/components/Header";
import Meals from "./assets/components/Meals";
import { CartContextProvider } from "./assets/components/store/CartContext";
import { UserProgressContextProvider } from "./assets/components/store/UserProgressContext";
import Cart from "./assets/components/Cart";
import Checkout from "./assets/components/Checkout";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header/>
        <Meals/>
        <Cart/>
        <Checkout/>
      </CartContextProvider>
    </UserProgressContextProvider>
    
  );
}

export default App;
