import { GiBullseye } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa";
import { FaMeh } from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  rating: number;
}

const ratingMap: { [key: number]: { icon: IconType; color: string } } = {
  3: { icon: FaMeh, color: "yellow" },
  4: { icon: FaThumbsUp, color: "seagreen" },
  5: { icon: GiBullseye, color: "red" },
};

const Rating = ({ rating }: Props) => {
  console.log(rating);
  if (rating < 3) return;
  const Icon = ratingMap[rating].icon;
  return (
    <Icon
      size={25}
      style={{ color: ratingMap[rating].color }}
      className="shadow "
    />
  );
};

export default Rating;
