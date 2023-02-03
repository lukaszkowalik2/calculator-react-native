import { Text, View } from 'react-native';
import styled from 'styled-components';
import { NormalKey } from './keysTypes/NormalKey';
import { NumberKey } from './keysTypes/NumberKey';

type Props = {
  setOperatorNumber: any;
  setFirstNumber: any;
  setSecondNumber: any;
  firstNumber: string;
  secondNumber: string;
  operatorNumber: string;
};
const KeyboardDisplay = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Keyboard: React.FC<Props> = ({ setOperatorNumber, setFirstNumber, setSecondNumber, firstNumber, secondNumber, operatorNumber }) => {
  const keys = ['CE', 'C', '⌫', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', '+/-', 0, '.', '='];
  const handleNumberClick = (number: number) => {
    const stringNumber = number.toString();
    if (operatorNumber) {
      setSecondNumber(secondNumber + stringNumber);
    } else {
      setFirstNumber(firstNumber + stringNumber);
    }
    console.log(firstNumber);
  };
  return (
    <KeyboardDisplay>
      {keys.map((e: string | number) => {
        if (typeof e === 'number') {
          return <NumberKey text={e} onClick={handleNumberClick} key={e} />;
        }
        return <NormalKey text={e} key={e} />;
      })}
    </KeyboardDisplay>
  );
};
