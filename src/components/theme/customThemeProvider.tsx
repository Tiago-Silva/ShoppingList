import React from 'react';
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../global/theme";
import {useSelector} from "react-redux";
import {ThemeState} from "../../store/modules/theme/type";

interface Props {
    children: React.ReactNode;
}

const CustomThemeProvider = ({children}: Props) => {
    const theme = useSelector<ThemeState>((state: any) => state.theme.currentTheme);

    return (
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    );
};

export default CustomThemeProvider;
