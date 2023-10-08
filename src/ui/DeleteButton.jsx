import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../features/cart/cartSlice";

function DeleteButton({ id }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(id));
  }

  return (
    <Button type="primary" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteButton;
