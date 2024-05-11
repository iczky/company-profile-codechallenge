const ReviewContainer: React.FC<{ children: JSX.Element[] }> = ({
  children,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="p-3">{children}</div>
    </div>
  );
};

export default ReviewContainer;
