import { useState } from "react";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUsername } from "./userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    dispatch(createUsername(username));
    navigate("/menu");
  }

  const loginUsername = useSelector((state) => state.user.username);

  if (loginUsername !== "")
    return (
      <div>
        <p className="mb-2 font-semibold text-stone-600">
          👋 Welcome! {loginUsername}, Order Pizza from Menu
        </p>
        <Button type="primary" onClick={() => navigate("/menu")}>
          Go To Menu
        </Button>
      </div>
    );
  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-5 font-semibold text-stone-600">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input w-72"
      />

      {username !== "" && (
        <div>
          <Button type={"primary"}>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
