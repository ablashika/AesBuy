import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { addAuthUser, createEmailAccount } from '../../redux/slice/authSlice';

export default function SignUpScreen({ navigation }) {
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);
  const [emailError, setEmailError] = useState(null);

  const [authUser, setAuthUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: ""
  });

  const handleUpdateState = (name, value) => {
    setAuthUser((prevUsers) => ({ ...prevUsers, [name]: value })); 
  }

  const handleOnsubmit = async () => { 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(authUser.email)) {
        setEmailError("Invalid email format");
        return;
      } else {
        setEmailError(null);
      dispatch(addAuthUser(authUser));
     dispatch(createEmailAccount(authUser));
        

      }
   
         try { 
            if (authError) {
              console.log(authError,"err")    
        }
        else{
          navigation.navigate('WallScreen')
        }
      } catch (error) {
        console.error('Login error:', error);
      }
  };
  

  
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={{ justifyContent: "space-between", flexDirection: "row", marginLeft:20,  height:100, alignItems:"flex-end"  }}>
          <TouchableOpacity
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
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.mainContainer}>
          <View style={{ margin: 20, marginTop: 10 }}>
            {authError || emailError? <Text style={styles.errorText}>Error logging in</Text> : null}
            <Text style={styles.label}>Name</Text>
            <TextInput
              value={authUser.name}
              onChangeText={(text) => handleUpdateState("name", text)}
              style={styles.inputField}
              placeholderTextColor="#dfe3eb"
              placeholder="Mary Ann"
            ></TextInput>
          </View>
          <View style={{ margin: 20, marginTop: 10 }}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={authUser.email}
              onChangeText={(text) => handleUpdateState("email", text)}
              style={styles.inputField}
              placeholderTextColor="#dfe3eb"
              placeholder="kofo@gmail.com"
            ></TextInput>
          </View>
          <View style={{ margin: 20, marginTop: 10 }}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              value={authUser.phoneNumber}
              onChangeText={(text) => handleUpdateState("phoneNumber", text)}
              style={styles.inputField}
              placeholderTextColor="#dfe3eb"
              placeholder="0244205594"
            ></TextInput>
          </View>
          <View style={{ margin: 20, marginTop: 10 }}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              value={authUser.password}
              onChangeText={(text) => handleUpdateState("password", text)}
              style={styles.inputField}
              placeholderTextColor="#dfe3eb"
              placeholder="Password"
              secureTextEntry={true}
            ></TextInput>
          </View>
          <View style={styles.signUpView}>
            <TouchableOpacity
              style={styles.signUp}
              onPress={() => handleOnsubmit()}
            >
              <Text style={{ color: "white" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
         
          <View style={{ alignItems:"center", justifyContent: "center", flexDirection: "row", }}>
            
            <Text>Don't have an account?</Text>
   
           <TouchableOpacity

             onPress={() => navigation.navigate("LogIn") }
           
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
             <Text style={{ color: "black" }}>Login</Text>
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
    flex: 1,
    height:200,
    width: 400,
  },
  mainContainer: {
    // backgroundColor: "#01383b",
    // width: 370,
    flex: 4,
    borderRadius: 50,
    // paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    // justifyContent:"center",
    alignItems:"center",
  },
  inputField: {
    height:50,
    width:350,
    borderRadius:10,
    padding:10,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"black",
    borderWidth:1
  },
  label: {
    color: "black",
    fontWeight: "3åå00",
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 5,
  },
  signUpView:{
    flex: 0.5,
    width:350,
  
    alignItems:"center",
 

 
  },
  signUp:{
    backgroundColor:"black",
    justifyContent:"center",
    alignItems:"center",
    height:50,
    width:350,
    borderRadius:10,
    padding:10,
    margin:20


  },
});
