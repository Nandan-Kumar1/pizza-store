import { Link } from "react-router-dom";
import SearchOrder from "./../features/order/SearchOrder";
import Username from "../features/user/Username";
import { useSelector } from "react-redux";
function Header() {
  const username = useSelector((state) => state.user.username);
  return (
    <header className="flex items-center justify-between bg-yellow-500 p-3 uppercase">
      <Link to={"/"} className="tracking-widest">
        React Pizza Co.
      </Link>
      <SearchOrder />
      {username && <Username />}
    </header>
  );
}

export default Header;
