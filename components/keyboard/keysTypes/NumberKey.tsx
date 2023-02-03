import { Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

type Props = {
  text: string | number;
  onClick: () => void;
};
const NumberWrapper = styled(TouchableOpacity)`
  height: 70px;
  width: 25%;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(31, 31, 31, 0.7);
  background-color: #1b1a1a;
`;
const Number = styled(Text)`
  font-weight: 600;
  color: #d9bef2;
`;
export const NumberKey: React.FC<Props> = ({ text, onClick }) => {
  return (
    <NumberWrapper onPress={() => onClick(text)}>
      <Number>{text}</Number>
    </NumberWrapper>
  );
};
