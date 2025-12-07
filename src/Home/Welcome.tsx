type userName = {
  text: string;
};

const NameFunction = ({ text }: userName) => {
  return (
    <div>
      <p style={{ color: "black" }}>
        Welcome <span>{text}</span>
      </p>
    </div>
  );
};

export default NameFunction;
