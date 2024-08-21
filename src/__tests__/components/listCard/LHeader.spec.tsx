import React from "react";
import {render, fireEvent, act} from "@testing-library/react-native";
import { Providers } from "../../../providers/Providers";
import LHeader from "../../../components/ListCard/LHeader";

describe('LHeader component', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <Providers>
                <LHeader name="Test List" onShowModal={jest.fn()} />
            </Providers>
        );
        expect(getByText('Test List')).toBeTruthy();
    });

    it('calls handleShowModal when icon button is pressed', () => {
        const handleShowModal = jest.fn();
        const { getByTestId } = render(
            <Providers>
                <LHeader name="Test List" onShowModal={handleShowModal} />
            </Providers>
        );
        const iconButton = getByTestId('icon-button-listCard');

        act(() => {
            fireEvent.press(iconButton);
        })
        expect(handleShowModal).toHaveBeenCalled();
    });
});
