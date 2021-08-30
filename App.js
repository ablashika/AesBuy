import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./src/Navigation/Navigation";
import { store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
      <StatusBar style="auto" />
    </Provider>
  );
}

// const Stack = createStackNavigator();

// const Tab = createMaterialTopTabNavigator();

// function HomeScreen() {
//   return (
//     <Tab.Navigator
//       style={{ backgroundColor: "#e9e6f5" }}
//       initialRouteName="Feed"
//       tabBarOptions={{
//         labelStyle: { fontSize: 12 },
//         style: { backgroundColor: "#e9e6f5", marginTop: 30 },
//         indicatorStyle: {
//           height: null,
//           margin: 5,
//           top: 0,
//           backgroundColor: "white",
//           borderRadius: 30,
//         },
//       }}
//     >
//       <Tab.Screen name="trendy" component={WallScreen} />
//       <Tab.Screen name="clothes" component={WallScreen} />
//       <Tab.Screen name="shoes" component={WallScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer independent={true}>
//       <Stack.Navigator
//         screenOptions={{
//           headerBackTitleVisible: false,
//           headerStyle: {
//             backgroundColor: "#e9e6f5",
//           },
//         }}
//       >
//         <Stack.Screen
//           options={{
//             header: () => null,
//           }}
//           name="WallScreen"
//           component={HomeScreen}
//         />
//         <Stack.Screen name="Newscreen" component={Newscreen} />
//         <Stack.Screen name="ProfileScreen" component={profileScreen} />
//         <Stack.Screen name="AddProduct" component={AddProduct} />
//         <Stack.Screen name="Cart" component={Cart} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#e9e6f5",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
