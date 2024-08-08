import React from 'react';
import {Input} from "../input";
import {HeaderService} from "../../service/headerService";

const HInput = () => {
    const {changeValue, handleInputChanges} = HeaderService.handleInput();

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
