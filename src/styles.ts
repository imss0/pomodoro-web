import styled from "styled-components";

// App
export const Wrapper = styled.div`
  max-width: 350px;
  height: 568px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
`;

export const TimerArea = styled.div`
  display: flex;
  align-items: center;
  font-size: 48px;
`;

export const CounterArea = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

// Card Component
export const Card = styled.div`
  width: 100px;
  height: 150px;
  background-color: white;
  color: tomato;
  border-radius: 5px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

// Button Component
export const Btn = styled.button`
  border: 0;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  width: 75px;
  height: 75px;
  font-size: 48px;
`;

// Counter Component
export const CounterTitle = styled.p`
  font-family: "Noto Sans", sans-serif;
`;
