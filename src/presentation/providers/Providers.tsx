import React from 'react';
import { Provider } from 'react-redux';
import store from '../../infrastructure/data/store';
import CustomThemeProvider from "../components/theme/customThemeProvider";

interface Props {
    children: React.ReactNode;
}

export const Providers = ({
    children
}: Props) => {
    return (
        <Provider store={store}>
            <CustomThemeProvider>
                {children}
            </CustomThemeProvider>
        </Provider>
    );
};
