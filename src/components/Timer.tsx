import { Card } from "../styles";
import { useEffect, useRef } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { minState, secState, playState, roundState, goalState } from "../atoms";

interface ITimerProps {
  rounds: number;
  goals: number;
}

export default function Timer({ rounds, goals }: ITimerProps) {
  const [minute, setMinute] = useRecoilState(minState);
  const [second, setSecond] = useRecoilState(secState);
  const [isPlay, setIsPlay] = useRecoilState(playState);
  const [currentRound, setRound] = useRecoilState(roundState);
  const [currentGoal, setGoal] = useRecoilState(goalState);
  const secRef = useRef<ReturnType<typeof setInterval>>();
  const resetMinute = useResetRecoilState(minState);
  const resetSecond = useResetRecoilState(secState);
  const resetRound = useResetRecoilState(roundState);
  const resetGoal = useResetRecoilState(goalState);

  const updateSecond = () => {
    setSecond((sec) => {
      if (sec > 1) {
        return sec - 1;
      }
      return 60;
    });
  };

  useEffect(() => {
    if (isPlay) {
      secRef.current = setInterval(() => {
        updateSecond();
        if (second === 60) {
          setMinute((min) => {
            if (min > 0) {
              return min - 1;
            } else {
              return 0;
            }
          });
        }
      }, 1);
    } else {
      clearInterval(secRef.current);
    }

    return () => {
      clearInterval(secRef.current);
    };
  }, [isPlay, second]);

  useEffect(() => {
    if (minute === 0 && second === 60) {
      resetMinute();
      resetSecond();
      if (currentGoal < goals) {
        if (currentRound < rounds) {
          setRound((round) => round + 1);
          if (currentRound + 1 === rounds) {
            setGoal((goal) => goal + 1);
            if (currentGoal + 1 === goals) {
              alert("Well done!!");
              resetRound();
              resetGoal();
            }
          }
        } else {
          setRound(1);
        }
        setIsPlay(false);
      }
    }
  }, [minute, second]);

  return (
    <>
      <Card>{minute}</Card>
      <p style={{ opacity: 0.5 }}>:</p>
      <Card>{second === 60 ? "00" : second}</Card>
    </>
  );
}
