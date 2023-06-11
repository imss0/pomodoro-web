import { Btn } from "../styles";
import { PlayIcon, PauseIcon } from "./ButtonIcons";
import { useRecoilState } from "recoil";
import { playState } from "../atoms";
const ButtonVariants = {
  hover: { scale: 1.2 },
  click: { scale: 1 },
};
export default function Button() {
  const [isPlay, setIsPlay] = useRecoilState(playState);

  const onClick = () => {
    setIsPlay((state) => !state);
  };

  return (
    <Btn
      variants={ButtonVariants}
      whileHover="hover"
      whileTap="click"
      onClick={onClick}
    >
      {isPlay ? <PauseIcon /> : <PlayIcon />}
    </Btn>
  );
}
