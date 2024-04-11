import { GiBullseye } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa";
import { FaMeh } from "react-icons/fa";
import { IconType } from "react-icons";

interface Props {
  rating: number;
}

const ratingMap: { [key: number]: { icon: IconType; color: string } } = {
  3: { icon: FaMeh, color: "#7E7923" },
  4: { icon: FaThumbsUp, color: "#21d10866" },
  5: { icon: GiBullseye, color: "#d10808cc" },
};

const Rating = ({ rating }: Props) => {
  if (rating < 3) return;
  const Icon = ratingMap[rating].icon;
  return (
    <Icon
      size={25}
      style={{ color: ratingMap[rating].color }}
      className="mx-3 shadow"
    />
  );
};

export default Rating;
