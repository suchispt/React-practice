import { useEffect, useState } from "react";
import car from "../assets/car.svg";

type passPosition = {
  currentPosition: (key: number) => void
}
const MovingCar = ({currentPosition}: passPosition) => {
  const [carPosition, setCarPosition] = useState(0);
  useEffect(() => {
    const position = (val: KeyboardEvent) => {
      if (val.key == "ArrowLeft") {
        setCarPosition((prev) => {
          if (prev == 47) {
            currentPosition(-51)
            return -51;
          }
          else {
            currentPosition(prev)
            const val = prev + 1
            return val;
          }
        });
      }

      if (val.key == "ArrowRight") {
        setCarPosition((prev) => {
          if (prev == -51) {
            currentPosition(47)
            return 47;
          }
          else {
            currentPosition(prev)
            const val = prev - 1
            return val;
          }
        });
      }
    };

    const name = "suchitra";

    if(!name){
      console.log("name -->", name);      
    }

    if (carPosition == 47) {
      setCarPosition(-5);
    }

    window.addEventListener("keydown", position);

    return () => {
      window.removeEventListener("keydown", position);
    };
  }, []);

  return (
    <>
      <img
        src={car}
        alt="car"
        width={200}
        style={{ position: "relative", right: `${carPosition}%` }}
      />
      <div
        style={{
          border: "1px solid black",
          position: "relative",
          bottom: "65px",
        }}
      ></div>
    </>
  );
};

export default MovingCar;
