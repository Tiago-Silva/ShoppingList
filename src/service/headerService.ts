import {useAppDispatch, useAppSelector} from "../store/modules/hooks";
import {inputValue} from "../store/modules/shoppingList/actions";
import {ThemeType} from "../store/modules/theme/type";
import {ThemeService} from "./themeService";
import {setTheme} from "../store/modules/theme/actions";


export const HeaderService = {

    handleInput: () => {
        const dispatch = useAppDispatch();
        const changeValue = useAppSelector((state) => state.cart?.inputValue);

        const handleInputChanges = (value: string) => {
            dispatch(inputValue(value));
        };

        return {
            changeValue,
            handleInputChanges,
        };
    },

    handleSelectTheme: (onShowModal: () => void) => {
        const dispatch = useAppDispatch();

        return (value: ThemeType) => {
            ThemeService.setTheme(value).then(() => {});
            dispatch(setTheme({ currentTheme: value }));
            onShowModal();
        };
    }

}
