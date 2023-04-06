import { useEffect } from "react";
import Navbar from "./components/Navbar"
import CartContainer from './components/cartContainer';
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
function App() {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItem]);
  return <main>
    <Navbar/>
    <CartContainer/>
  </main>;
}
export default App;
