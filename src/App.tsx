import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NameFunction from "./Home/Welcome";
import TodayMessage from "./Home/TodayMessage";
import CardComponent from "./Home/Card";
import LayoutComp from "./Home/Layout";
import Counter from "./Home/Counter";
import ProfileCard from "./Home/ProfileCard";
import Timer from "./Home/Timer";
import MovingCar from "./Home/Car";

function App() {
  const [background, setBackground] = useState("rgb(255, 239, 186)");
  return (
    <>
      {/* <LayoutComp>
        <CardComponent>
          <NameFunction text="suchitra !!" />
          <TodayMessage day="Thursday" feeling="Happy"></TodayMessage>
          <Counter></Counter>
        </CardComponent>
      </LayoutComp> */}

      {/* <CardComponent>
        <ProfileCard></ProfileCard>
      </CardComponent> */}

      {/* <CardComponent>
        <Timer></Timer>
      </CardComponent> */}

      <CardComponent backdrop={background}>
        <MovingCar></MovingCar>
      </CardComponent>
    </>
  );
}

export default App;
