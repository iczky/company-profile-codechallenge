const CardContainer: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-5 items-center">{children}</div>
    </div>
  );
};

export default CardContainer;
