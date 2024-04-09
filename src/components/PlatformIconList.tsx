import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Platform } from "../interfaces/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    web: BsGlobe,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
  };

  return (
    <div className="flex w-full items-center justify-start">
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        if (!Icon) return null;
        return <Icon key={platform.id} className="h-6 w-6 px-1" />;
      })}
    </div>
  );
};

export default PlatformIconList;
