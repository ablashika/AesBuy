import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { getProducts } from "../../redux/actions/userActions";
import { connect, useDispatch } from "react-redux";
import call from "react-native-phone-call";

function Newscreen({
  navigation,
  route: {
    params: { item_details },
  },
}) {
  const dispatch = useDispatch();
  // console.log("Details => ", item_details);

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const triggerCall = () => {
    if (item_details.phoneNumber.length != 10) {
      alert("Please insert correct contact number");
      return;
    }

    const args = {
      number: item_details.phoneNumber,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}></View>
      <View style={styles.mainContainer}>
        <View style={styles.midBox}>
          <View style={styles.card}>
            <Text style={{ color: "white", marginTop: 20, fontWeight: "bold" }}>
              {item_details.name}
            </Text>

            <Text style={{ color: "white", margin: 20 }}>
              {item_details.description}
            </Text>

            <Text style={{ color: "white", marginTop: 5, fontWeight: "bold" }}>
              {item_details.price}
            </Text>
          </View>
          <View style={styles.icons}></View>
        </View>
        <View style={styles.midBox}>
          <View style={styles.imageBox}>
            <Image
              style={{ height: 350, width: 150, borderRadius: 20 }}
              source={{
                uri: "data:image/jpeg;base64," + item_details.image,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.lastbox}>
        <View style={styles.addItem}>
          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <Text>+</Text>
          </TouchableOpacity>
          <Text>{count}</Text>
          <TouchableOpacity onPress={() => setCount(count - 1)}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={triggerCall}>
          <View style={styles.buyItem}>
            <Text style={{ color: "white" }}>contact</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FFFD",
    alignItems: "center",
    justifyContent: "center",
  },

  navContainer: {
    flex: 0.7,

    width: 500,
  },
  mainContainer: {
    flex: 3,
    width: 500,
    flexDirection: "row",
    justifyContent: "center",
  },
  midBox: {
    height: 600,
    width: 180,
    margin: 5,
    alignItems: "center",
  },

  card: {
    // height: 250,
    width: 150,
    backgroundColor: "black",
    margin: 5,
    marginTop: 40,
    alignItems: "center",
    paddingBottom:10
  },

  imageBox: {
    backgroundColor: "white",
    height: 350,
    width: 150,
    marginRight: 20,
    borderRadius: 20,
  },
  lastbox: {
    // backgroundColor: "black",
    flex: 2,
    width: 300,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  addItem: {
    backgroundColor: "white",
    height: 35,
    width: 80,
    marginTop: 50,
    color: "white",
    margin: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  buyItem: {
    backgroundColor: "#f19900",
    height: 35,
    width: 80,
    marginTop: 50,
    color: "black",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});



export default Newscreen;
