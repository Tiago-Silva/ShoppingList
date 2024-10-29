import { ThemeType } from "../store/modules/theme/type";
import { useAppDispatch } from "../store/modules/hooks";
import { setTheme } from "../store/modules/theme/actions";
import { useSelector } from 'react-redux';
import { ThemeState } from '../store/modules/theme/type';
import {IStorageService, IThemeService} from "../interface/interface";

export class ThemeService implements IThemeService {
    private storageService: IStorageService;

    constructor(storageService: IStorageService) {
        this.storageService = storageService;
    }

    async getTheme(): Promise<ThemeType> {
        try {
            const theme = await this.storageService.getItem('theme');
            if (!theme) {
                await this.storageService.setItem('theme', 'dark');
                return 'dark';
            }
            if (theme === 'dark' || theme === 'light') {
                return theme;
            }
            throw new Error('Invalid theme value');
        } catch (error) {
            console.error('Erro ao buscar o tema no AsyncStorage', error);
            throw error;
        }
    }

    async setTheme(theme: string): Promise<void> {
        try {
            await this.storageService.setItem('theme', theme);
        } catch (error) {
            console.error('Erro ao salvar o tema no AsyncStorage', error);
        }
    }

    handleGetThemeToRedux(): string {
        return useSelector<ThemeState, ThemeState['currentTheme']>((state) => state.currentTheme);
    }

    handleSelectTheme(onShowModal: () => void) {
        const dispatch = useAppDispatch();

        return (value: ThemeType) => {
            this.setTheme(value).then(() => {});
            dispatch(setTheme({ currentTheme: value }));
            onShowModal();
        };
    }

    getThemeFromRedux() {
        return this.handleGetThemeToRedux();
    }
}
