import { Provider } from 'react-redux';
import store from '../store';
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
