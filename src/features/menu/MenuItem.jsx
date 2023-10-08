import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import DeleteButton from "../../ui/DeleteButton";
import UpdateQuantityBtn from "../../ui/UpdateQuantityBtn";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const isPresent = useSelector(getCurrentQuantity(id)) > 0;

  function handleOnClick() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: 1 * unitPrice,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="m-2 flex grow pt-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-sm ${soldOut ? "opacity-80 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pl-2">
        <p className="font-semibold">{name}</p>
        <p className="text-sm capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-stone-500">Sold out</p>
          )}

          {isPresent && (
            <div className="flex items-center ">
              <UpdateQuantityBtn id={id} />
              <DeleteButton id={id} />
            </div>
          )}
          {!soldOut && !isPresent && (
            <Button type="primary" onClick={handleOnClick}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
