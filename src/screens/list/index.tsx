import {Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";


export const List = () => {
    return (
        <Container>
            <Text>Lists in here</Text>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
    align-items: center;
    justify-content: center;
`;
