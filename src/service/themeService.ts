import AsyncStorage from "@react-native-async-storage/async-storage";
import {ThemeType} from "../store/modules/theme/type";


export const ThemeService = {
    getTheme: async (): Promise<ThemeType> => {
        try {
            const theme = await AsyncStorage.getItem('theme');
            if (theme === 'dark' || theme === 'light') {
                return theme;
            }
            throw new Error('Invalid theme value');
        } catch (error) {
            console.error('Erro ao buscar o tema no AsyncStorage', error);
            throw error;
        }
    },
    setTheme: async (theme: ThemeType) => {
        try {
            await AsyncStorage.setItem('theme', theme);
        } catch (error) {
            console.error('Erro ao salvar o tema no AsyncStorage', error);
        }
    }
}
