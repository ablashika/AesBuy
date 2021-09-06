import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/userActions";
import Pickers from "./Components/Pickers";
import { EvilIcons } from "@expo/vector-icons";
import ImagePickers from "./Components/ImagePickers";

function AddProduct({ addUser, navigation }) {
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const [users, setUser] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    phoneNumber: "",
  });
  const handleUpdateState = (name, value) => {
    setUser({ ...users, [name]: value });
  };

  const handleOnsubmit = () => {
    addUser(
      users.name,
      users.price,
      users.description,
      image,
      selectedValue,
      inputValue
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5 }}></View>
      <View style={styles.mainContainer}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            margin: 40,
          }}
        >
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              backgroundColor: "black",
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              navigation.navigate("WallScreen");
            }}
          >
            <EvilIcons name="close" size={15} color="white" />
            {/* <Text style={{ color: "white" }}>*</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleOnsubmit();
            }}
            style={{
              backgroundColor: "black",
              height: 20,
              width: 80,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>upload</Text>
          </TouchableOpacity>
        </View>

        <View style={{ margin: 20, marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            productName
          </Text>
          <TextInput
            value={users.name}
            onChangeText={(text) => {
              handleUpdateState("name", text);
            }}
            style={{ marginTop: 10 }}
            placeholderTextColor="#dfe3eb"
            placeholder=" Add"
          ></TextInput>
        </View>
        <View style={{ margin: 20, marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>price</Text>
          <TextInput
            value={users.price}
            onChangeText={(text) => {
              handleUpdateState("price", text);
            }}
            style={{ marginTop: 10 }}
            placeholderTextColor="#dfe3eb"
            placeholder="Add"
          ></TextInput>
        </View>
        <View style={{ margin: 20, marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Upload Image
          </Text>
          <ImagePickers image={image} setImage={setImage} />
        </View>
        <View style={{ margin: 20, marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Product Description
          </Text>
          <TextInput
            value={users.description}
            onChangeText={(text) => {
              handleUpdateState("description", text);
            }}
            style={{ marginTop: 10 }}
            placeholderTextColor="#dfe3eb"
            placeholder="Add"
          ></TextInput>
        </View>

        <View style={{ margin: 20, marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Phonenumber
          </Text>
          <TextInput
            inputValue={inputValue}
            onChangeText={(inputValue) => setInputValue(inputValue)}
            style={{ marginTop: 5 }}
            placeholderTextColor="#dfe3eb"
            placeholder="Add"
          ></TextInput>
        </View>

        <View
          style={{
            marginHorizontal: 20,
            height: 30,
            width: 160,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Category</Text>
        </View>
        <View>
          <Pickers
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9e6f5",
  },

  mainContainer: {
    backgroundColor: "#a797bd",
    width: 370,
    height: 100,
    flex: 5.5,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
});

const mapStateToProps = (state) => {
  return {
    //  auth:state,
    user: state,
  };
};
export default connect(mapStateToProps, { addUser })(AddProduct);
