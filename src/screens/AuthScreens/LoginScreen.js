import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser,addAuthUser } from '../../redux/slice/authSlice';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.authUser);
  const [emailError, setEmailError] = useState(null);
  // console.log(user,"kk")

   console.log(authError,"hemjlyyy")

 
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleUpdateState = (name, value) => {
    console.log(loginData,"llheyy")
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };



const handleOnSubmit = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(loginData.email)) {
        setEmailError("Invalid email format");
        return;
      } else {
        setEmailError(null);
        dispatch(addAuthUser(loginData));
        dispatch(loginUser( loginData.email, loginData.password));

      }
        

        if (authError ) {
        } else  {
          navigation.navigate('WallScreen')
        }
      
      } catch (error) {
        console.error('Login error:', error);
      }
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
      <View style={{ justifyContent: "space-between", flexDirection: "row", marginLeft:20,  height:100, alignItems:"flex-end" }}>
            {/* <TouchableOpacity
              style={{
                height: 25,
                width: 25,
                backgroundColor: "black",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                navigation.navigate("screen");
              }}
            >
              <EvilIcons name="close" size={10} color="white" />
            </TouchableOpacity> */}
            {/*  */}
          </View>

          
      </View>

     
        <View style={styles.mainContainer}>
        <View style={{ justifyContent:"center", borderWidth:"1px", borderRadius:"3px", marginBottom:20}}>
        <MaterialCommunityIcons name="music-note-whole-dotted" size={40} color="black"/>
        </View>
        

          <View style={{marginBottom: 20, marginTop: 20,}}>
          {authError || emailError  ? <Text >enter valid email</Text> : null}
            <Text style={{ color: "black",  marginBottom:10 }}>Email</Text>
            <TextInput
              value={loginData.email}
              onChangeText={(text) => handleUpdateState("email", text)}
              style={styles.TextInput}
              placeholderTextColor="#dfe3eb"
              placeholder="kofo@gmail.com"
            ></TextInput>
          </View>

          <View style={{ margin: 20}}>
            <Text style={{ color: "black", marginBottom:10  }}>Password</Text>
            <TextInput
              value={loginData.password}
              onChangeText={(text) => handleUpdateState("password", text)}
              style={styles.TextInput}
              placeholderTextColor="#dfe3eb"
              placeholder="Password"
              secureTextEntry={true}
            ></TextInput>
          </View>

          <View  style={styles.loginView}>
          <TouchableOpacity
          style={styles.login}
              onPress={() => handleOnSubmit()}
             
            >
              <Text style={{ color: "white" }}>Log In</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ alignItems:"center", justifyContent: "center", flexDirection: "row", }}>
            
             <Text>Don't have an account?</Text>
    
            <TouchableOpacity

              onPress={() => navigation.navigate("SignUp") }
            
              style={{
                borderBottomWidth:2
                // backgroundColor: "black",
                // height: 40,
                // width: 80,
                // justifyContent: "center",
                // alignItems: "center",
                // borderRadius: 20,
              }}
            >
              <Text style={{ color: "black" }}>Sign Up</Text>
            </TouchableOpacity>
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
    backgroundColor: "#F9FFFD",
  },
  top:{
    flex: 0.5,
    height:200,
   width: 400,
  //  backgroundColor:"red",
   justifyContent:"center",
   alignItems:"center"

  },
  mainContainer: {
    // backgroundColor: "red",

    width: 370,
    borderRadius: 50,
    height: 500,
    flex: 4.5,
    justifyContent:"center",
    alignItems:"center",
  },

  loginView:{
    flex: 0.5,
    width:350,
    // justifyContent:"center",
    alignItems:"center",
 

 
  },
  login:{
    backgroundColor:"black",
    justifyContent:"center",
    alignItems:"center",
    height:50,
    width:350,
    borderRadius:10,
    padding:10,
    margin:20


  },


  TextInput:{
    // backgroundColor:"#e5f7f2",
    height:50,
    width:350,
    borderRadius:10,
    padding:10,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"black",
    borderWidth:1

  }
 
});