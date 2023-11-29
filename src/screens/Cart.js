import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Image,
  Picker,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function Cart({ navigation }) {

  const cartItems = useSelector((state)=>state.user.selectedItems)
  console.log(cartItems,"hey")
  // const jackets = [
  //   {
  //     id: "id123",
  //     imgURL:
  //       "https://images.unsplash.com/photo-1594032194509-0056023973b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  //     text: "Pioneer ",
  //     price: "90gh",
  //   },
    
  // ];

  return (
    <View style={styles.container}>
      <View style={styles.addIcon}>
        <MaterialIcons name="add-circle" size={50} color="black" />
      </View>
      <View style={{ flex: 5 }}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.cartBox}>
                  <View style={{ flexDirection: "row" }}>
                    <Image source={{ uri: item.imgURL }} style={styles.image} />
                  </View>
                  <View style={{ height: 60, margin: 10 }}>
                    <Text style={{ marginBottom: 10, fontWeight: "bold" }}>
                      {item.text}
                    </Text>
                    <Text>{item.price}</Text>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>

      <View style={styles.buttonTab}>
        <View
          style={{
            backgroundColor: "white",
            height: 40,
            width: 220,
            borderRadius: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("WallScreen");
            }}
          >
            <MaterialCommunityIcons
              name="home-variant-outline"
              size={24}
              color="#b3b3b3"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <Feather name="shopping-cart" size={20} color="#b3b3b3" />
          </TouchableOpacity>
          <TouchableOpacity>
            <EvilIcons name="search" size={24} color="#b3b3b3" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProfileScreen");
            }}
          >
            <MaterialIcons name="person" size={24} color="#b3b3b3" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e6f5",
    alignItems: "center",
    // justifyContent: "center",
  },

  cartBox: {
    height: 90,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 20,
    flexDirection: "row",
    // justifyContent: "center",
  },

  addIcon: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 90,
    width: 300,
  },

  image: {
    height: 70,
    width: 50,
    borderRadius: 20,
    margin: 10,
  },
  buttonTab: {
    flex: 1,
    backgroundColor: "transparent",
    height: 50,
    width: 500,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});

