import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WallScreen from "../screens/ProductScreens/WallScreen";
import Newscreen from "../screens/ProductScreens/Newscreen";
import { NavigationContainer } from "@react-navigation/native";
import AddProduct from "../screens/AddProduct";
import ProfileScreen from "../screens/ProfileScreen";
import Cart from "../screens/Cart";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ShoeScreen from "../screens/ProductScreens/ShoeScreen";
import Clothes from "../screens/ProductScreens/Clothes";
import LandingPage from "../screens/LandingPage";
import SignUpScreen from "../screens/AuthScreens/SignUpScreen";
import LoginScreen from "../screens/AuthScreens/LoginScreen";

export default function Navigation() {
  const Stack = createStackNavigator();

  const Tab = createMaterialTopTabNavigator();

  function HomeScreen() {
    return (
      <Tab.Navigator
        style={{ backgroundColor: "#f5f3fa" }}
        initialRouteName="Feed"
        screenOptions={{
          tabBarStyle: { backgroundColor: "#f9f8fc", marginTop: 30, color:"white", },
          tabBarIndicatorStyle: {
            // height: null,
            // margin: 5,
            // top: 0,
            //  width:"20%",
            backgroundColor: "#a797bd",

          },
          // tabBarItemStyle: { color: "#333" }, // Set the color for the entire tab bar item
          tabBarLabelStyle: { fontWeight:"bold"},
          // labelStyle: { fontSize: 12 },
          // style: { backgroundColor: "#f5f3fa", marginTop: 30, border:0 },
          // indicatorStyle: {
          //   height: null,
          //   margin: 5,
          //   top: 0,
          //   backgroundColor: "white",
          //   borderRadius: 30,
          // },
        }}
      >
        <Tab.Screen name="trendy" component={WallScreen} />
        <Tab.Screen name="clothes" component={Clothes} />
        <Tab.Screen name="shoes" component={ShoeScreen} />
      
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "#e9e6f5",
          },
        }}
      >
        <Stack.Screen name="screen" component={LandingPage} />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="WallScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="Newscreen" component={Newscreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="AddProduct" component={AddProduct} 
      
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e6f5",
    alignItems: "center",
    justifyContent: "center",
  },
});
