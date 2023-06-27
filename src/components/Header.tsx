type HeaderProps = {
  questionCount: number;
};

export const Header = ({ questionCount }: HeaderProps) => {
  return <h2 className="text-xl mb-4">Question {questionCount} / 5</h2>;
};
