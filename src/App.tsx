import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default function App() {
  return (
    <div>
      <Box transition={{ duration: 3 }} animate={{ borderRadius: "100px" }} />
    </div>
  );
}
