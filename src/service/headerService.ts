import { useAppDispatch, useAppSelector } from "../store/modules/hooks";
import { inputValue } from "../store/modules/shoppingList/actions";
import { IHeaderService, IThemeService } from "../interface/interface";

export class HeaderService implements IHeaderService {
    private themeService: IThemeService;

    constructor(themeService: IThemeService) {
        this.themeService = themeService;
    }

    handleInput() {
        const dispatch = useAppDispatch();
        const changeValue = useAppSelector((state) => state.cart?.inputValue);

        const handleInputChanges = (value: string) => {
            dispatch(inputValue(value));
        };

        return {
            changeValue,
            handleInputChanges,
        };
    }

    handleSelectTheme(onShowModal: () => void) {
        return this.themeService.handleSelectTheme(onShowModal);
    }

    getThemeFromRedux() {
        return this.themeService.getThemeFromRedux();
    }
}
