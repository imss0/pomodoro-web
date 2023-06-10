import { Btn } from "../styles";
import { PlayIcon, PauseIcon } from "@heroicons/react/20/solid";

export default function Button() {
  return (
    <Btn>
      <PauseIcon className="h-4 w-4 text-gray-500" />
    </Btn>
  );
}
