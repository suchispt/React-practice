import { useState } from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [name, setName] = useState("");

  const [count, setCount] = useState(0);

  return (
    <>
      <span>[</span>
      <input
        value={name}
        placeholder="Enter your Name:"
        onChange={(e) => setName(e.target.value)}
      />
      <span>]</span>

      <p>Hello, {name || "Guest"} !</p>

      <p>Cout : {count}</p>
      <div className="alignBtn">
        <button onClick={() => setCount(count + 1)}>[+]</button>
        <button onClick={() => setCount(count - 1)}>[-]</button>
      </div>
    </>
  );
};

export default ProfileCard;
