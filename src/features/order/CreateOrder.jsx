import { useState } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../cart/cartSlice";
import store from "./../../store";
import EmptyCart from "../cart/EmptyCart";
import { fetchAddress } from "../user/userSlice";

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { username, status, position, address, erro } = useSelector(
    (state) => state.user,
  );

  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="m-3">
      <h2 className="mb-5 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-36">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input m-2 grow"
          />
        </div>

        <div className="mb-4 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-36">Phone number</label>

          <input type="tel" name="phone" required className="input m-2 grow" />
        </div>

        <div className="relative mb-4 flex flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-36">Address</label>

          <input
            type="text"
            name="address"
            required
            className="input m-2 grow"
            disabled={status === "loading"}
            defaultValue={address}
          />
          {address === "" ? (
            <span className="absolute  bottom-[-4px] right-0">
              <Button
                type="primary"
                onClick={(e) => {
                  e.preventDefault;
                  dispatch(fetchAddress());
                }}
                isSubmitting={status === "loading"}
              >
                Get Location
              </Button>
            </span>
          ) : null}
        </div>
        {status === "error" && (
          <div className="mb-3 mt-[-14px] flex items-center justify-center rounded-md bg-red-200 text-red-500">
            Unable To Get The Location
          </div>
        )}

        <div className="mb-4 flex items-center space-x-3">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className=" accent-yellow-100 focus:outline-none "
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" isSubmitting={isSubmitting}>
            {isSubmitting ? "Submitting...." : " Order Now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
