import React,{useEffect} from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons, Feather, EvilIcons, MaterialIcons } from "@expo/vector-icons";


function Authenticated  ({navigation}) {
    const isAuthenticated = useSelector((state) => state.auth.login);
  
    useEffect(() => {
      console.log("currentUser changed:", isAuthenticated);
    }, [isAuthenticated]);
  return (
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
      <TouchableOpacity>
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
      {
         isAuthenticated? (<TouchableOpacity
          onPress={() => {
            navigation.navigate("ProfileScreen");
          }}
        >
          <MaterialIcons name="person" size={24} color="#b3b3b3" />
        </TouchableOpacity>):(null)
      }
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e9e6f5",
    },
  
    newContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
  
    inav: {
      width: 350,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  
    textContainerTwo: {
      // backgroundColor: "",
      height: 40,
      width: 100,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
      margin: 5,
    },
  
    imageView: {
      width: 170,
      justifyContent: "center",
      backgroundColor: "#e9e6f5",
      margin: 5,
      flexDirection: "column",
      alignItems: "center",
    },
  
    imagebox: {
      backgroundColor: "white",
      height: 210,
  
      width: 150,
      margin: 5,
      // marginTop: 10,
      borderRadius: 20,
    },
    imageboxTwo: {
      backgroundColor: "white",
      height: 70,
      width: 150,
      margin: 5,
      borderRadius: 20,
    },
  
    imageboxThree: {
      backgroundColor: "white",
      height: 270,
      width: 150,
      margin: 5,
      borderRadius: 20,
    },
    label: {
      height: 30,
      margin: 5,
      width: 80,
      marginLeft: 15,
      // backgroundColor: "white",
    },
  
    buttonTab: {
      flex: 1,
      backgroundColor: "transparent",
      height: 50,
      width: 500,
      justifyContent: "center",
      alignItems: "center",
      marginTop: -120,
    },
  });
export default Authenticated