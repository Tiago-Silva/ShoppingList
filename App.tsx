import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ThemeProvider} from "styled-components";
import styled from "styled-components/native";
import theme from "./src/global/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
