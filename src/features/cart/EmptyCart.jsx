import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="m-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mt-3 font-semibold">
        Hungry?...... Go to Menu and Order Pizza Now :)
      </p>
      <div className="mt-3 rounded-lg bg-stone-200 p-4 font-semibold">
        <img src="/empty-cart.png"></img>
      </div>
    </div>
  );
}

export default EmptyCart;
