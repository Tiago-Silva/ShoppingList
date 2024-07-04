import { StatusBar } from 'react-native';
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./src/global/theme";
import {Routes} from "./src/routes";
import Header from "./src/components/header";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor='#2a2e34'
                    barStyle="light-content"
                />
                <Routes />
            </GestureHandlerRootView>
        </ThemeProvider>
    );
}
