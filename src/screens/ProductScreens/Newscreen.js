import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity,Animated,Easing  } from "react-native";
import { getProducts } from "../../redux/actions/userActions";
import {useDispatch } from "react-redux";
import call from "react-native-phone-call";
import { EvilIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

function Newscreen({
  navigation,
  route: {
    params: { item_details },
  },
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts(dispatch);
  }, []);

  const [count, setCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [animValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 2500, // Adjust the duration as needed
      delay: 3000, // Delay before animation starts
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      setIsReady(true); // Set isReady to true after animation completes
    });
  }, []);

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
       <View style={styles.top}>
      <View style={{ justifyContent: "space-between", flexDirection: "row", margin: 40 }}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
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
            </TouchableOpacity>
            {/*  */}
          </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.midBox}>
          <TouchableOpacity style={styles.card}>
          {!isReady ? (
            <View >
              <Text style={{ color: "white", fontWeight: "200", fontSize: 25, textAlign: "center" }}>
                {item_details.name}
              </Text>
            </View>
          ) : (
            <Animated.View style={ { opacity: animValue }}>
              <Text style={{ color: "white", fontWeight: "120", margin: 20, fontSize: 10, textAlign: "center" }}>
                {item_details.description}
              </Text>
              <Text style={{ color: "white", marginTop: 5, fontWeight: "100" , textAlign: "center"}}>
                {item_details.price}
              </Text>
            </Animated.View>
                 )}
          </TouchableOpacity>
        
         
          <View style={styles.icons}></View>
        </View>
       
        <View style={styles.imageBox}>
          <View style={styles.imageBox}> 
          <ScrollView>

            <Image
              style={{ height: 350, width: 150, borderRadius: 20 }}
              source={{
                uri: "data:image/jpeg;base64," + item_details.image,
              }}
            />
            </ScrollView>
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
  top:{
    flex: 1,
    height:50,
   width: 400,

    justifyContent:"center"

  },
  mainContainer: {
    flex: 2.5,
    width: 500,
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "#01383b",
  },
  midBox: {
    // height: 600,
    width: 180,
    margin: 2,
    alignItems: "center",
    justifyContent:"center",
    // backgroundColor: "#9cd6bd",
  },

  card: {
     height: 350,
    width: 150,
    backgroundColor: "black",
    // margin: 5,
    // marginTop: 40,
    borderRadius: 20,
    alignItems: "center",
    // paddingBottom:10,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"

  },

  imageBox: {
    width: 180,
    margin: 2,
    alignItems: "center",
    justifyContent:"center",
    // backgroundColor: "#9cd6bd",

  },
  lastbox: {
    //  backgroundColor: "black",
    flex: 1.5,
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
    backgroundColor: "black",
    height: 35,
    width: 80,
    marginTop: 50,
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
