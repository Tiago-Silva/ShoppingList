

export const lightTheme: themeType = {
    colors: {
        primary: '#5636D3',
        secondary: '#FF872C',

        secondary_light: 'rgba(255, 135, 44, 0.3)',
        success: '#12A454',
        success_light: 'rgba(18, 164, 84, 0.5)',

        attention: '#E83F5B',
        attention_light: 'rgba(232, 63, 91, 0.5)',

        shape: '#FFFFFF',
        title: '#FFE600',
        text: '#FFFFFF',
        text_bar: '#FFFFFF',
        text_bar_2: '#d0f80a',
        text_dark: '#000000',

        background: '#f4f1f1',
        background_card: '#5636D3',
        background_header: '#5636D3',
        gray_01: '#5636D3',

    }
}

export const darkTheme: themeType = {
    colors: {
        primary: '#d0f80a',
        secondary: '#FF872C',

        secondary_light: 'rgba(255, 135, 44, 0.3)',
        success: '#12A454',
        success_light: 'rgba(18, 164, 84, 0.5)',

        attention: '#E83F5B',
        attention_light: 'rgba(232, 63, 91, 0.5)',

        shape: '#FFFFFF',
        title: '#FFE600',
        text: '#608fe6',
        text_bar: '#d0f80a',
        text_bar_2: '#969cB2',
        text_dark: '#969cB2',

        background: '#1d1f22',
        background_card: '#303035',
        background_header: '#1d1f22',
        gray_01: '#30353c',

    }
}

export type themeType = {
    colors: {
        primary: string;
        secondary: string;
        secondary_light: string;
        success: string;
        success_light: string;
        attention: string;
        attention_light: string;
        shape: string;
        title: string;
        text: string;
        text_bar: string;
        text_bar_2: string;
        text_dark: string;
        background: string;
        background_card: string;
        background_header: string;
        gray_01: string;
    }
}
