import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, logoutUser} from '../redux/slice/authSlice';

export default function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.authUser);
  const user = useSelector((state) => state.auth.user);
  console.log(user,"heyuy")
  useEffect(() => {
       dispatch(fetchUserData(currentUser.email));  
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate("screen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <View style={styles.imageBox}></View>
        <View style={{ flexDirection: "column" }}>
           <Text>{user.name}</Text>
         <Text>{user.email}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 4,
          alignItems: "center",
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
        <TouchableOpacity style={styles.box}
        onPress={handleLogout}
        >
          <Text>Log out</Text>
        </TouchableOpacity>
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
