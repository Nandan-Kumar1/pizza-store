import { Link } from "react-router-dom";
const styles = {
  primary:
    "m-4 rounded-full bg-yellow-400 px-3 py-1 font-semibold uppercase text-stone-800 transition-all duration-300 hover:bg-yellow-300",
  secondary:
    "m-4 rounded-full bg-stone-200 px-2.5 py-0.5 font-semibold uppercase text-stone-400 transition-all duration-300 hover:bg-stone-300 hover:text-stone-700",
  delete:
    "rounded-full bg-stone-200 px-2.5 py-0.5 font-semibold text-stone-600 transition-all duration-300 hover:bg-stone-300 hover:text-stone-700",
};

function Button({ children, isSubmitting, to, type, onClick }) {
  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        Order pizzas
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        disabled={isSubmitting}
        className={styles[type]}
      >
        {children}
      </button>
    );
  }
  return (
    <button disabled={isSubmitting} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
