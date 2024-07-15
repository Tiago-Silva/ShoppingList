import { Provider } from 'react-redux';
import store from '../store';
import {ThemeProvider} from "styled-components";
import {darkTheme} from "../global/theme";

interface Props {
    children: React.ReactNode;
}

export const Providers = ({
    children
}: Props) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={darkTheme}>
                {children}
            </ThemeProvider>
        </Provider>
    );
};
