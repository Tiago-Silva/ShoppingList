import AsyncStorage from '@react-native-async-storage/async-storage';
import { IStorageService } from '../interface/interface';

export class StorageService implements IStorageService {
    async getItem(key: string): Promise<string | null> {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            console.error('Erro ao buscar o item no AsyncStorage', error);
            return null;
        }
    }

    async setItem(key: string, value: string): Promise<void> {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.error('Erro ao salvar o item no AsyncStorage', error);
        }
    }
}
