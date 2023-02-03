import { Text, View } from 'react-native';
import styled from 'styled-components';

type Props = {
  firstNumber: string;
  secondNumber: string;
  operatorNumber: string;
};
const DisplayContainer = styled(View)`
  flex: 1;
  height: 100%;
`;
export const Display: React.FC<Props> = ({ firstNumber, secondNumber, operatorNumber }) => {
  return (
    <DisplayContainer>
      <Text>
        {firstNumber} {operatorNumber} {secondNumber}
      </Text>
    </DisplayContainer>
  );
};
