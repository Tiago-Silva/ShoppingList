import { StatusBar } from 'react-native';
import {Routes} from "./src/presentation/routes";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Providers} from "./src/presentation/providers/Providers";
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
    return (
        <Providers>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor='#2a2e34'
                    barStyle="light-content"
                />
                <Routes />
            </GestureHandlerRootView>
        </Providers>
    );
}
