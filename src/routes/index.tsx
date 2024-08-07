import { Home } from "../screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { List } from "../screens/list";
import { Header } from "../components/header";
import CheckItems from "../screens/checkItems";
import AddItems from "../screens/addItems";
import HInput from "../components/header/hInput";
import {ShoppingList} from "../interface/interface";

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
                            const routeParams = route.params as ShoppingList;
                            const name = routeParams?.name || 'Itens';
                            return (
                                <Header.Root background={'background_card'}>
                                    <Header.Left onNavigation={navigation.goBack} />
                                    <Header.Title name={name} />
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
                                <Header.Root background={'background_card'}>
                                    <Header.Left onNavigation={navigation.goBack} />
                                    <Header.Input />
                                </Header.Root>
                            );
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
