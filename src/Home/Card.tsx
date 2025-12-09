
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
      }}
    >
      {children}
    </div>
  );
};

export default CardComponent;
