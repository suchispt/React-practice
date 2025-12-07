type LayoutProps = {
  children: React.ReactNode;
};

const LayoutComp = ({ children }: LayoutProps) => {
  return (
    <div style={{ backgroundColor: "chocolate", padding: "13px" }}>
      {children}
    </div>
  );
};

export default LayoutComp;
