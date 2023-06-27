type HeaderProps = {
  questionCount: number;
};

export const Header = ({ questionCount }: HeaderProps) => (
  <h1 className="mb-4">問題 {questionCount} / 5</h1>
);
