import { CounterTitle } from "../styles";

interface ITitle {
  text: string;
}

export default function Counter({ text }: ITitle) {
  return <CounterTitle>{text}</CounterTitle>;
}
