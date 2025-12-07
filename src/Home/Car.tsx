import { useEffect, useState } from "react";
import car from "../assets/car.svg";

const MovingCar = () => {
  var [carPosition, setCarPosition] = useState(0);

  useEffect(() => {
    var position = (val: KeyboardEvent) => {
      if (val.key == "ArrowLeft") {
        setCarPosition((prev) => {
          if (prev == 47) return -51;
          else return prev + 1;
        });
      }

      if (val.key == "ArrowRight") {
        setCarPosition((prev) => {
          if (prev == -51) return 47;
          else return prev - 1;
        });
      }
    };

    if (carPosition == 47) {
      carPosition = -5;
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
