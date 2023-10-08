import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-1.5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className=" ">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
