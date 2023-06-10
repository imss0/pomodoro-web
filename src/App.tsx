import { Helmet } from "react-helmet";
import { Wrapper, TimerArea, CounterArea } from "./styles";
import TimeCard from "./components/Timecard";
import Button from "./components/Button";
import Counter from "./components/Counter";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Noto+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Wrapper>
        <h1>Pomodoro</h1>
        <TimerArea>
          <TimeCard />
          <p style={{ opacity: 0.5 }}>:</p>
          <TimeCard />
        </TimerArea>
        <Button />
        <CounterArea>
          <Counter text={"ROUND"} />
          <Counter text={"GOALS"} />
        </CounterArea>
      </Wrapper>
    </>
  );
}
