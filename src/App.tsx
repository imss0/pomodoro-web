import { Helmet, HelmetProvider } from "react-helmet-async";
import { Wrapper, TimerArea, CounterArea } from "./styles";
import Timer from "./components/Timer";
import Button from "./components/Button";
import Counter from "./components/Counter";

export default function App() {
  return (
    <>
      <HelmetProvider>
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
      </HelmetProvider>
      <Wrapper>
        <h1>Pomodoro</h1>
        <TimerArea>
          <Timer />
        </TimerArea>
        <Button />
        <CounterArea>
          <Counter titleText={"ROUND"} target={4} />
          <Counter titleText={"GOALS"} target={12} />
        </CounterArea>
      </Wrapper>
    </>
  );
}
