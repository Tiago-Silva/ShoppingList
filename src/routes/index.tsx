import { Home } from "../screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { List } from "../screens/list";
import { Header } from "../components/header";
import CheckItems from "../screens/checkItems";
import AddItems from "../screens/addItems";
import HeaderItem from "../components/header/headerItem";

const Stack = createStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: true,
                        header: ({ navigation, route, options, back }) => {
                            return (
                                <Header.Root>
                                    <Header.Title name="Home" />
                                    <Header.Right onShowModal={() => {}} />
                                    <Header.Modal isVisible={false} onShowModal={() => {}} />
                                </Header.Root>
                            );
                        }
                    }}
                />
                <Stack.Screen
                    name="List"
                    component={List}
                    options={{
                        headerShown: true,
                        header: ({ navigation, route, options, back }) => {
                            return (
                                <Header.Root>
                                    <Header.Left onNavigation={navigation.goBack} />
                                    <Header.Title name="Lista" />
                                    <Header.Right onShowModal={() => {}} />
                                    <Header.Modal isVisible={false} onShowModal={() => {}} />
                                </Header.Root>
                            );
                        }
                    }}
                />
                <Stack.Screen
                    name="CheckItems"
                    component={CheckItems}
                    options={{
                        headerShown: true,
                        header: ({ navigation, route, options, back }) => {
                            return (
                                <Header.Root background={'background_card'}>
                                    <Header.Left onNavigation={navigation.goBack} />
                                    <Header.Title name="Itens" />
                                    <Header.Right onShowModal={() => {}} />
                                    <Header.Modal isVisible={false} onShowModal={() => {}} />
                                </Header.Root>
                            );
                        }
                    }}
                />
                <Stack.Screen
                    name="AddItems"
                    component={AddItems}
                    options={{
                        headerShown: true,
                        header: ({ navigation, route, options, back }) => {
                            return (
                                <HeaderItem
                                    onNavigation={navigation.goBack}
                                    background={'background_card'}
                                />
                            );
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
