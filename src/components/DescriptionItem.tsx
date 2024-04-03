import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DescriptionItem = ({ term, children }: Props) => {
  return (
    <div className="my-5 ">
      <dt className="fs-5 text-light py-1 text-capitalize">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
};

export default DescriptionItem;
