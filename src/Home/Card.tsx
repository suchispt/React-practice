
type CardComp = {
  children?: React.ReactNode;
  backdrop?: string;
};

const CardComponent = ({ children, backdrop }: CardComp) => {
  return (
    <div
      style={{
        width: "63rem",
        borderRadius: "10px",
        background: `${backdrop}`,
        color: "black",
        border: "1px solid black",
        display: "grid",
        justifyContent: "center",
        padding: "38px"
      }}
    >
      {children}
    </div >
  );
};

export default CardComponent;
