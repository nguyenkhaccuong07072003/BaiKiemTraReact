import { StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ScanScreen from "./screens/ScanScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const MyTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: true,
                headerShown: false,
                tabBarStyle: {
                    height: 65,
                    backgroundColor: "#000",
                    paddingTop: 10,
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            {/* <Tab.Screen name="Cart" component={CartScreen} /> */}
        </Tab.Navigator>
    );
};

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Scan" component={ScanScreen} />

                <Stack.Screen name="MyTab" component={MyTab} />
            </Stack.Navigator>
            <StatusBar barStyle="dark-content" backgroundColor="#000" />
        </NavigationContainer>
    );
};

export default SignedInStack;
