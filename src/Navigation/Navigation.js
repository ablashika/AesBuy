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
        style={{ backgroundColor: "#F9FFFD" }}
        initialRouteName="Feed"
        screenOptions={{
          tabBarStyle: { backgroundColor: "#F9FFFD", marginTop: 30, color:"white", },
          tabBarIndicatorStyle: {
            // height: null,
            // margin: 5,
            // top: 0,
            //  width:"20%",
            backgroundColor: "#01383b",

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
            backgroundColor: "#F9FFFD",
          },
        }}
      >
        <Stack.Screen name="screen"
         options={{
          header: () => null,
        }}
        component={LandingPage} />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="WallScreen"
          component={HomeScreen}
        />
        <Stack.Screen
        options={{
          header: () => null,
        }}
        name="Newscreen" component={Newscreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="AddProduct" component={AddProduct} 
      
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen 
        options={{
          header: () => null,
        }}
        name="SignUp" component={SignUpScreen} />
        <Stack.Screen 
        options={{
          header: () => null,
        }}
        name="LogIn" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FFFD",
    alignItems: "center",
    justifyContent: "center",
  },
});
