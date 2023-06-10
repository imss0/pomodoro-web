import { Card } from "../styles";
import { useEffect, useRef } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { minState, secState, playState } from "../atoms";

export default function TimeCard() {
  const [minute, setMinute] = useRecoilState(minState);
  const [second, setSecond] = useRecoilState(secState);
  const [isPlay, setIsPlay] = useRecoilState(playState);
  const secRef = useRef<ReturnType<typeof setInterval>>();
  const resetMinute = useResetRecoilState(minState);
  const resetSecond = useResetRecoilState(secState);

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
      }, 30);
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
      setIsPlay(false);
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
