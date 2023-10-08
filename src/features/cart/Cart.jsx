import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";

import { clearCart, getCart } from "./cartSlice";

import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();
  // console.log(cart);
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="m-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-4 text-xl font-semibold ">Your cart, {username}</h2>

      <ul className="my-2 divide-y-2 divide-stone-200 border-b-2">
        {cart.map((item, i) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div>
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
