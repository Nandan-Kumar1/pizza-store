import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  decreaseQuantity,
  getCurrentQuantity,
  increaseQuantity,
} from "../features/cart/cartSlice";

function UpdateQuantityBtn({ id }) {
  const dispatch = useDispatch();

  function handlePlus() {
    dispatch(increaseQuantity(id));
  }

  function handleminus() {
    dispatch(decreaseQuantity(id));
  }

  const itemQuantity = useSelector(getCurrentQuantity(id));

  return (
    <div className="ml-2 flex items-center gap-x-1">
      {itemQuantity > 9 ? null : (
        <Button type="delete" onClick={handlePlus}>
          +
        </Button>
      )}
      <div>{itemQuantity}</div>
      <Button type="delete" onClick={handleminus}>
        -
      </Button>
    </div>
  );
}

export default UpdateQuantityBtn;
