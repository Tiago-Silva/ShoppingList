import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import {ThemeProvider} from "styled-components";
import styled from "styled-components/native";
import {lightTheme} from "./src/global/theme";

export default function App() {
    return (
        <ThemeProvider theme={lightTheme}>
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
