import { ReactNode } from "react";
import { useTheme } from "./ThemeContext/ThemeContext";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DescriptionItem = ({ term, children }: Props) => {
  const theme = useTheme();

  return (
    <div className="my-5">
      <dt
        className={`py-1 text-lg capitalize transition-colors duration-300 ${theme ? "text-light" : "text-dark"}`}
      >
        {term}
      </dt>
      <dd>{children}</dd>
    </div>
  );
};

export default DescriptionItem;
