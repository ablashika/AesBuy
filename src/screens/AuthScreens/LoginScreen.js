import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser,addAuthUser } from '../../redux/slice/authSlice';

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);
  const users = useSelector((state) => state.auth.authUser);
  console.log(users,"heyy")

  const [loginData, setLoginData] = useState({
    // name: "",
    email: "",
    password: "",
  });

  const handleUpdateState = (name, value) => {
    console.log(loginData,"llheyy")
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnSubmit = async () => {
    try {
        await dispatch(addAuthUser(loginData));
        await dispatch(loginUser(loginData.email, loginData.password));
        if (!authError) {
          navigation.navigate('WallScreen');
        }
      } catch (error) {
        console.error('Login error:', error);
      }
   
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2, backgroundColor: "green" }}></View>
      <View style={styles.main}>
        <View style={styles.mainContainer}>
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
                navigation.navigate("screen");
              }}
            >
              <EvilIcons name="close" size={15} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleOnSubmit()}
              style={{
                backgroundColor: "black",
                height: 30,
                width: 80,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "white" }}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={{ margin: 20, marginTop: 10 }}>
          {authError ? <Text >enter valid email</Text> : null}
            <Text style={{ color: "white", fontWeight: "bold" }}>Email</Text>
            <TextInput
              value={loginData.email}
              onChangeText={(text) => handleUpdateState("email", text)}
              style={{ marginTop: 10 }}
              placeholderTextColor="#dfe3eb"
              placeholder="kofo@gmail.com"
            ></TextInput>
          </View>

          <View style={{ margin: 20, marginTop: 10 }}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Password</Text>
            <TextInput
              value={loginData.password}
              onChangeText={(text) => handleUpdateState("password", text)}
              style={{ marginTop: 10 }}
              placeholderTextColor="#dfe3eb"
              placeholder="Password"
              secureTextEntry={true}
            ></TextInput>
          </View>
          
          <View style={{ alignItems:"center", justifyContent: "center", flexDirection: "column", }}>
            
             <Text>Don't have an account?</Text>
    
            <TouchableOpacity

               onPress={() => navigation.navigate("SignUp") }
              disabled={!!authError} 
              style={{
                backgroundColor: "black",
                height: 40,
                width: 80,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "white" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          

        

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
    borderRadius: 50,
    height: 400,
  },
  main: {
    backgroundColor: "#e9e6f5",
    width: 370,
    height: 100,
    flex: 5.8,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
});
