import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { addAuthUser, createEmailAccount } from '../../redux/slice/authSlice';

export default function SignUpScreen({ navigation }) {
  const dispatch = useDispatch();
  const authUsers = useSelector((state) => state.auth.authUser);
  console.log(authUsers,"user")
  const authError = useSelector((state) => state.auth.error);

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
         try { 
             dispatch(addAuthUser(authUser));
              await dispatch(createEmailAccount(authUser));
            console.log(authUser, "rr");
            if (authError) {
              console.log(authError,"err")
            
           await navigation.navigate('WallScreen')
        }
      } catch (error) {
        console.error('Login error:', error);
      }
  };
  
  console.log(authUser)
  
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
              navigation.navigate("screen");
            }}
          >
            <EvilIcons name="close" size={15} color="white" />
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.mainContainer}>
          <View style={{ margin: 20, marginTop: 10 }}>
            {authError? <Text style={styles.errorText}>Erro logging in</Text> : null}
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
              <Text style={{ color: "white" }}>Submit</Text>
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
    paddingTop: 20,
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
