import styled from "styled-components/native";
import {Text} from "react-native";
import {StatusBar} from "expo-status-bar";


export const Home = () => {
    return (
        <Container>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.colors.background};
    align-items: center;
    justify-content: center;
`;
