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

function App() {
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

      <CardComponent>
        <Timer></Timer>
      </CardComponent>
    </>
  );
}

export default App;
