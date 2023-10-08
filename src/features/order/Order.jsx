// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="m-4 space-y-3">
      <div className="mb-4 flex flex-wrap items-center justify-between space-x-1">
        <h2 className="text-xl font-semibold">Status #{id} order</h2>

        <div className="space-x-2">
          {priority && (
            <span className="mx-1 rounded-full bg-red-600 px-2 py-0.5 uppercase text-red-50">
              Priority
            </span>
          )}
          <span className="mx-1 rounded-full bg-green-600 px-2 py-0.5 uppercase text-red-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap space-x-2 rounded-md bg-stone-300 p-2">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y-2 border-b-2 border-t-2">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="rounded-md bg-stone-300 p-2">
        <p className="text-sm">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && (
          <p className="text-sm">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="rounded-lg border-stone-500 bg-stone-200 font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  return await getOrder(params.orderID);
}

export default Order;
