type HeaderProps = {
  questionCount: number;
};

export const Header = ({ questionCount }: HeaderProps) => {
  return (
    <h2 className="text-2xl mb-4">
      Question {questionCount}
      <span className={"text-sm"}> / 5</span>
    </h2>
  );
};
