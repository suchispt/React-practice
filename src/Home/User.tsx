import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };


const User = () => {
  const [isLogin, setLogin] = useState(false)

  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState<number[]>([]);

  // const clickCount =  [];

  const skills = [
    { id: 1, value: "React" },
    { id: 2, value: "TS" },
    { id: 3, value: "Angular" },
    { id: 4, value: "Js" }
  ]

  useEffect(() => {
    setClickCount(prev => [...prev, count])
  }, [count])


  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => setLogin(!isLogin)}>Login</button>
      {isLogin ? <p> Welcome Suchitra </p> : <p>Please Login</p>}

      <button onClick={() => setCount(count + 1)}>Count</button>
      <ol>
        {skills.map(val =>
          <li key={val.id}>{val.value}</li>
        )}
      </ol>

      <button onClick={() => {navigate("/counter")}}>navigate</button>

      <p>Click History: {clickCount.join(", ")}</p>
    </>
  )
}

export default User;


