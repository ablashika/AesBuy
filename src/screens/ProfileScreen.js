import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <View style={styles.imageBox}></View>
        <View style={{ flexDirection: "column" }}>
          <Text>Ablashika</Text>
          <Text>Ablashika</Text>
        </View>
      </View>
      <View
        style={{
          flex: 4,
          // backgroundColor: "blue",
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddProduct");
          }}
          style={styles.box}
        >
          <Text>Supply product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text>My orders</Text>
        </TouchableOpacity>
        {/* <View style={styles.box}></View> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e6f5",
  },
  imageBox: {
    margin: 30,
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: "white",
  },
  profileBox: {
    alignItems: "center",
    // justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "#e9e6f5",
    flex: 2,
  },

  box: {
    height: 70,
    marginTop: 20,
    width: 300,
    backgroundColor: "#a797bd",
    alignItems: "center",
    justifyContent: "center",
  },
});
