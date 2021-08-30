import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WallScreen from "../screens/WallScreen";
import Newscreen from "../screens/Newscreen";
import { NavigationContainer } from "@react-navigation/native";
import AddProduct from "../screens/AddProduct";
import ProfileScreen from "../screens/ProfileScreen";
import Cart from "../screens/Cart";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ShoeScreen from "../screens/ShoeScreen";
import Clothes from "../screens/Clothes";

export default function Navigation() {
  const Stack = createStackNavigator();

  const Tab = createMaterialTopTabNavigator();

  function HomeScreen() {
    return (
      <Tab.Navigator
        style={{ backgroundColor: "#e9e6f5" }}
        initialRouteName="Feed"
        tabBarOptions={{
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: "#e9e6f5", marginTop: 30 },
          indicatorStyle: {
            height: null,
            margin: 5,
            top: 0,
            backgroundColor: "white",
            borderRadius: 30,
          },
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
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="WallScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="Newscreen" component={Newscreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="Cart" component={Cart} />
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
