import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';

export default function App() {
  const Button = styled.Button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
  `;
  const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  `;
  return (
    <>
      <SafeArea>
        <Text>test</Text>
      </SafeArea>
      <ExpoStatusBar style='auto' />
    </>
  );
}
