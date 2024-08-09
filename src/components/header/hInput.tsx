import React from 'react';
import {Input} from "../input";
import {StorageService} from "../../service/storageService";
import {ThemeService} from "../../service/themeService";
import {HeaderService} from "../../service/headerService";

const storageService = new StorageService();
const themeService = new ThemeService(storageService);
const headerService = new HeaderService(themeService);

const HInput = () => {
    const {changeValue, handleInputChanges} = headerService.handleInput();

    return (
        <Input
            placeholder={'Nome do item'}
            height={4}
            width={44}
            fontSize={12}
            value={changeValue}
            onChangeText={handleInputChanges}
        />
    );
};

export default HInput;
