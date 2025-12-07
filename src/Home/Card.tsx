import { Children } from "react";

type CardComp = {
  children: React.ReactNode;
};

const CardComponent = ({ children }: CardComp) => {
  return (
    <div
      style={{
        width: "63rem",
        borderRadius: "10px",
        backgroundColor: "aquamarine",
        color: "black",
      }}
    >
      {children}
    </div>
  );
};

export default CardComponent;
