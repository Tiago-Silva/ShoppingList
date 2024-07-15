import {Home} from "../screens/home";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {List} from "../screens/list";
import Header from "../components/header";
import CheckItems from "../screens/checkItems";
import AddItems from "../screens/addItems";
import HeaderItem from "../components/header/headerItem";

const Stack = createStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: true,
                        header: ({ navigation, route, options, back })  => {
                            return <Header isShow={true} />
                        }
                    }}
                />
                <Stack.Screen
                    name="List"
                    component={List}
                    options={{
                        headerShown: true,
                        header: ({ navigation, route, options, back }) => {
                            return <Header isShow={false} handleNavigation={navigation.goBack}/>
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
                                <Header
                                    isShow={true}
                                    handleNavigation={navigation.goBack}
                                    background={'background_card'}
                                />
                            )
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
                                    handleNavigation={navigation.goBack}
                                    background={'background_card'}
                                />
                            )
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
