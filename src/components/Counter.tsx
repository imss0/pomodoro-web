import { CounterContainer, CounterTitle, CounterDetail } from "../styles";

interface ICounterProps {
  titleText: string;
  target: number;
}

export default function Counter({ titleText, target }: ICounterProps) {
  return (
    <CounterContainer>
      <CounterDetail>0/{target}</CounterDetail>
      <CounterTitle>{titleText}</CounterTitle>
    </CounterContainer>
  );
}
