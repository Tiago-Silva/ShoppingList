import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import {ThemeProvider} from "styled-components";
import styled from "styled-components/native";
import {lightTheme} from "./src/global/theme";
import {Routes} from "./src/routes";

export default function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Routes />
        </ThemeProvider>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
    align-items: center;
    justify-content: center;
`;
