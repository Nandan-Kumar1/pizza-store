import Button from "../../ui/Button";
import DeleteButton from "../../ui/DeleteButton";
import UpdateQuantityBtn from "../../ui/UpdateQuantityBtn";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  return (
    <li className="flex items-center justify-between text-xs sm:text-lg">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="sm:text-sm sm:font-semibold">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateQuantityBtn id={pizzaId} />
        <DeleteButton id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
