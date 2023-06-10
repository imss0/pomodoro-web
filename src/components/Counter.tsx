import { CounterContainer, CounterTitle, CounterDetail } from "../styles";
import { roundState, goalState } from "../atoms";
import { useRecoilValue } from "recoil";

interface ICounterProps {
  titleText: string;
  target: number;
}

export default function Counter({ titleText, target }: ICounterProps) {
  const currentRound = useRecoilValue(roundState);
  const currentGoal = useRecoilValue(goalState);
  return (
    <CounterContainer>
      {titleText === "ROUND" ? (
        <CounterDetail>
          {currentRound} / {target}
        </CounterDetail>
      ) : (
        <CounterDetail>
          {currentGoal} / {target}
        </CounterDetail>
      )}

      <CounterTitle>{titleText}</CounterTitle>
    </CounterContainer>
  );
}
