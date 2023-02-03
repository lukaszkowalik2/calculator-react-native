import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components';
import { Display } from './components/display/Display';
import { Keyboard } from './components/keyboard/Keyboard';

export default function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operatorNumber, setOperatorNumber] = useState('');

  const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  `;
  const Wrapper = styled(View)`
    background-color: #010101;
    flex: 1;
  `;
  return (
    <>
      <SafeArea>
        <Wrapper>
          <Display firstNumber={firstNumber} secondNumber={secondNumber} operatorNumber={operatorNumber} />
          <Keyboard firstNumber={firstNumber} setFirstNumber={setFirstNumber} secondNumber={secondNumber} setSecondNumber={setSecondNumber} operatorNumber={operatorNumber} setOperatorNumber={setOperatorNumber} />
        </Wrapper>
      </SafeArea>
      <ExpoStatusBar style='auto' />
    </>
  );
}
