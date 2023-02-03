import { Text, View } from 'react-native';
import styled from 'styled-components';

type Props = {
  text: string | number;
};
const Normal = styled(Text)`
  font-weight: 600;
  color: #64b3a8;
`;
const NumberWrapper = styled(View)`
  height: 70px;
  width: 25%;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(31, 31, 31, 0.7);
  background-color: #1b1a1a;
`;
export const NormalKey: React.FC<Props> = ({ text }) => {
  return (
    <NumberWrapper>
      <Normal>{text}</Normal>
    </NumberWrapper>
  );
};
