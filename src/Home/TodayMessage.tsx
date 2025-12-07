type message = {
  day: string;
  feeling: string;
};

const Message = ({ day, feeling }: message) => {
  return (
    <>
      <p style={{ color: "black" }}>
        Today is <span>{day} </span> and i am feeling <span>{feeling} !!</span>
      </p>
    </>
  );
};

export default Message;
