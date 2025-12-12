// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import LayoutComp from "./Home/Layout";
// import Counter from "./Home/Counter";
// import ProfileCard from "./Home/ProfileCard";
// import Timer from "./Home/Timer";
// import MovingCar from "./Home/Car";
// import NameFunction from "./Home/Welcome";
// import TodayMessage from "./Home/TodayMessage";
import "./App.css";
// import CardComponent from "./Home/Card";
import { Routes, Route } from "react-router-dom";
// import User from "./Home/User";
// import UserApi from "./Home/UserApi";
import Login from "./Home/Login";
import UserApi from "./Home/UserApi";
import TableComponent from "./Loans/Components/Table";
// import Avatar from "./Home/Avatar";
// import AvatarImg from "./assets/avatar.svg";


function App() {
  // const [background, setBackground] = useState("rgb(255, 239, 186)");

  // const setBgColor = (val: number) => {
  //   if(val){
  //     console.log("val -->", val); 
  //     setBackground("rgb(255, 239, 186)")     
  //   }

  // }
  // return (
  //   <>
  //     {/* <LayoutComp>
  //       <CardComponent>
  //         <NameFunction text="suchitra !!" />
  //         <TodayMessage day="Thursday" feeling="Happy"></TodayMessage>
  //         <Counter></Counter>
  //       </CardComponent>
  //     </LayoutComp>

  //     <CardComponent>
  //       <ProfileCard></ProfileCard>
  //     </CardComponent>

  //     <CardComponent>
  //       <Timer></Timer>
  //     </CardComponent>

  //     <CardComponent backdrop={background}>
  //       <MovingCar currentPosition={setBgColor}></MovingCar>
  //     </CardComponent> */}
  //     <CardComponent>
  //       <User></User>
  //     </CardComponent>
  //   </>
  // );


  return (
    <Routes>
      <Route path="/" element={<TableComponent />}/>
      <Route path="/userApi" element={<UserApi />}
      />
    </Routes>

    // <>
    //   <Avatar src={AvatarImg} alt="image"/>
    //   <Avatar>S</Avatar>
    //   <Avatar/>
    // </>
  )
}



// function App() {
//    return( 
//    <>
//    <></>
//       <h1 style={{color: "blue"}}>Welcome to reatc {name}</h1>
//       <h1 style={{color: "black"}}>Hello, I am entering the React World 🚀</h1>
//    </>
// )
// }

export default App;
