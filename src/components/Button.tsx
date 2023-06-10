import { Btn } from "../styles";
import { PlayIcon, PauseIcon } from "./ButtonIcons";
import { useRecoilState } from "recoil";
import { playState } from "../atoms";

export default function Button() {
  const [isPlay, setIsPlay] = useRecoilState(playState);

  const onClick = () => {
    setIsPlay((state) => !state);
  };

  return <Btn onClick={onClick}>{isPlay ? <PauseIcon /> : <PlayIcon />}</Btn>;
}
