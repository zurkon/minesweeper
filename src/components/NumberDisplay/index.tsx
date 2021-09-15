import React from 'react';
import { DisplayContainer } from "./style";

interface NumberDisplayProps {
  value: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ value }) => {
  return (
    <DisplayContainer>
      {value.toString().padStart(3, '0')}
    </DisplayContainer>
  );
}

export default NumberDisplay;