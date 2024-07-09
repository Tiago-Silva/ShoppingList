import {Home} from "../screens/home";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {List} from "../screens/list";
import Header from "../components/header";
import Items from "../screens/items";

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
                    name="Items"
                    component={Items}
                    options={{
                        headerShown: true,
                        header: ({ navigation, route, options, back }) => {
                            return <Header isShow={true} handleNavigation={navigation.goBack}/>
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
