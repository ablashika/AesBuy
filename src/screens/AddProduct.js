import React, { useState, useEffect } from "react";
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
  ImageStore,
} from "react-native";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/userActions";
import * as ImagePicker from "expo-image-picker";
import { EvilIcons } from "@expo/vector-icons";

function AddProduct({ addUser, navigation }) {
  const [inputValue, setInputValue] = useState("");

  const [image, setImage] = useState("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const imageView = () => {
    if (image) {
      return (
        <Image
          source={{
            uri: "data:image/jpeg;base64," + image,
          }}
          style={{ height: 30, width: 30, borderRadius: 5 }}
        />
      );
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.base64);
    }
  };

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

  const [selectedValue, setSelectedValue] = useState("bags");
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

          <TouchableOpacity
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            onPress={pickImage}
          >
            <EvilIcons name="image" size={24} color="black" />

            {imageView()}
          </TouchableOpacity>
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
          <Picker
            mode="dialog"
            selectedValue={selectedValue}
            style={{
              height: 50,
              marginHorizontal: 20,
              backgroundColor: "transpa",
            }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            {/* <Picker.Item label="trendy" color="white" value="trendy" /> */}
            <Picker.Item label="clothes" color="white" value="clothes" />
            <Picker.Item label="shoes" color="white" value="shoes" />
          </Picker>
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
