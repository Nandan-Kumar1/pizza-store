import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPizzaQuantity, getTotalAmount } from "./cartSlice";

function CartOverview() {
  const pizzaQuantity = useSelector(getPizzaQuantity);
  const totalPrice = useSelector(getTotalAmount);

  if (!pizzaQuantity) return null;
  return (
    <div className="flex items-center justify-between space-x-3 bg-stone-800 p-3 uppercase text-stone-200">
      <p className="space-x-2">
        <span>{pizzaQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to={"/cart"} className="text-stone-400">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
