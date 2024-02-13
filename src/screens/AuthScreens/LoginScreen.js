// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
// import { EvilIcons } from "@expo/vector-icons";
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser,addAuthUser, fetchUserData } from '../../redux/slice/authSlice';
// import { ScrollView } from 'react-native-gesture-handler';

// export default function LoginScreen({ navigation }) {
//   const dispatch = useDispatch();
//   const authError = useSelector((state) => state.auth.error);
//   const users = useSelector((state) => state.auth);
//   const user = useSelector((state) => state.auth.authUser);
//   console.log(user,"heyy")

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleUpdateState = (name, value) => {
//     console.log(loginData,"llheyy")
//     setLoginData((prevData) => ({ ...prevData, [name]: value }));
//   };

// const handleOnSubmit = async () => {
//     try {
//         await dispatch(addAuthUser(loginData)); // Add user first
//         await dispatch(loginUser( loginData.email, loginData.password)); // Then login
    
//         if (!authError && user) {
//           navigation.navigate('WallScreen');
//         }
//       } catch (error) {
//         console.error('Login error:', error);
//       }
   
//   };

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 0.2, backgroundColor: "green" }}></View>
//       <ScrollView style={styles.main}>
//         <View style={styles.mainContainer}>
//           <View style={{ justifyContent: "space-between", flexDirection: "row", margin: 40 }}>
//             <TouchableOpacity
//               style={{
//                 height: 30,
//                 width: 30,
//                 backgroundColor: "black",
//                 borderRadius: 15,
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//               onPress={() => {
//                 navigation.navigate("screen");
//               }}
//             >
//               <EvilIcons name="close" size={15} color="white" />
//             </TouchableOpacity>
           
//           </View>

//           <View style={{ margin: 20, marginTop: 10 }}>
//           {authError ? <Text >enter valid email</Text> : null}
//             <Text style={{ color: "white", fontWeight: "bold" }}>Email</Text>
//             <TextInput
//               value={loginData.email}
//               onChangeText={(text) => handleUpdateState("email", text)}
//               style={{ marginTop: 10 }}
//               placeholderTextColor="#dfe3eb"
//               placeholder="kofo@gmail.com"
//             ></TextInput>
//           </View>

//           <View style={{ margin: 20, marginTop: 10 }}>
//             <Text style={{ color: "white", fontWeight: "bold" }}>Password</Text>
//             <TextInput
//               value={loginData.password}
//               onChangeText={(text) => handleUpdateState("password", text)}
//               style={{ marginTop: 10 }}
//               placeholderTextColor="#dfe3eb"
//               placeholder="Password"
//               secureTextEntry={true}
//             ></TextInput>
//           </View>

//           <View style={{ alignItems:"center", justifyContent: "center", flexDirection: "column", }}>
//           <TouchableOpacity
//               onPress={() => handleOnSubmit()}
//               style={styles.button}
//             >
//               <Text style={{ color: "white" }}>Login</Text>
//             </TouchableOpacity>
//           </View>
          
//           <View style={{ alignItems:"center", justifyContent: "center", flexDirection: "column", }}>
            
//              <Text style={{color:"white"}}>Don't have an account?</Text>
    
//             <TouchableOpacity

//                onPress={() => navigation.navigate("SignUp") }
//               disabled={!!authError} 
//               style={styles.sButton}
//             >
//               <Text style={{ color: "white", fontSize:8 }}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
          

        

//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#e9e6f5",
//   },
//   mainContainer: {
//     backgroundColor: "#a797bd",
//     width: 370,
//     borderRadius: 50,
//     height: 700,
//   },
//   main: {
//     backgroundColor: "#e9e6f5",
//     width: 370,
//     height: 100,
//     flex: 5.8,
//     borderTopEndRadius: 50,
//     borderTopStartRadius: 50,
//   },
//   button: {
//     margin: 10,
//     padding: 15,
//     backgroundColor: '#8A80A8',
//     borderRadius: 8,
//     alignItems: 'center',
//     width:200
//   },
//   sButton: {
//     margin: 20,
//     backgroundColor: '#8A80A8',
//     borderRadius: 8,
//     alignItems: 'center',
//     width:90,
//     height:30,
//     alignItems:"center", justifyContent: "center", flexDirection: "column"
//   },


//  });

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
// import { EvilIcons } from "@expo/vector-icons";
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser,addAuthUser, fetchUserData } from '../../redux/slice/authSlice';
// import { ScrollView } from 'react-native-gesture-handler';

// export default function LoginScreen({ navigation }) {
//   const dispatch = useDispatch();
//   const authError = useSelector((state) => state.auth.error);
//   const user = useSelector((state) => state.auth.authUser);
//   console.log(user,"heyy")

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleUpdateState = (name, value) => {
//     console.log(loginData,"llheyy")
//     setLoginData((prevData) => ({ ...prevData, [name]: value }));
//   };

// const handleOnSubmit = async () => {
//     try {
//         await dispatch(addAuthUser(loginData)); // Add user first
//         await dispatch(loginUser( loginData.email, loginData.password)); // Then login
    
//         if (!authError && user) {
//           navigation.navigate('WallScreen');
//         }
//       } catch (error) {
//         console.error('Login error:', error);
//       }
   
//   };


//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 0.2, backgroundColor: "#4CAF50" }}></View>
//       <ScrollView >
//         <View style={styles.main}>
//         <View style={styles.mainContainer}>
//           <View style={styles.closeButton}>
//             <TouchableOpacity
//               style={styles.closeButtonIcon}
//               onPress={() => {
//                 navigation.navigate("screen");
//               }}
//             >
//               <EvilIcons name="close" size={15} color="white" />
//             </TouchableOpacity>
//           </View>

//           <View style={styles.inputContainer}>
//             {authError ? <Text style={styles.errorText}>Enter a valid email</Text> : null}
//             <Text style={styles.label}>Email</Text>
//             <TextInput
//               value={loginData.email}
//               onChangeText={(text) => handleUpdateState("email", text)}
//               style={styles.inputField}
//               placeholderTextColor="#dfe3eb"

//             //   placeholder="enter"
//             ></TextInput>
//           </View>

//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>Password</Text>
//             <TextInput
//               value={loginData.password}
//               onChangeText={(text) => handleUpdateState("password", text)}
//               style={styles.inputField}
//               placeholderTextColor="#dfe3eb"
//             //   placeholder="Password"
//               secureTextEntry={true}
//             ></TextInput>
//           </View>

//           <View style={styles.buttonContainer}>
//             {!authError?
//                (
//                     <TouchableOpacity
//                     disabled={!!authError}
//               onPress={() => handleOnSubmit()}
//               style={styles.button}
//             >
//               <Text style={{ color: "white", fontSize:10, }}>Log In</Text>
//             </TouchableOpacity>
//                 ):( (null))
//             }
//           </View>

//           <View style={styles.signupContainer}>
//             <Text style={styles.signupText}>Don't have an account?</Text>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("SignUp")}
              
//               style={styles.signupButton}
//             >
//               <Text style={{ color: "white", fontSize:5, }}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#e9e6f5",
//   },
//   mainContainer: {
//     backgroundColor: " #a797bd ",
//     width: 370,
//     borderRadius: 20,
//     paddingTop: 20,
//     paddingHorizontal: 20,
//     paddingBottom: 30,
//   },
//   closeButton: {
//     justifyContent: "flex-end",
//     flexDirection: "row",
//     marginBottom: 20,

//   },
//   closeButtonIcon: {
//     height: 30,
//     width: 30,
//     backgroundColor: "#301934",
//     borderRadius: 15,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     color: "white",
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   inputField: {
//     height: 40,
//     borderBottomWidth:1,
//     borderColor:"white",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   errorText: {
//     color: "red",
//     marginBottom: 5,
//   },
//   buttonContainer: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   button: {
//      padding: 5,
//     borderWidth:1,
//     borderColor:"#e9e6f5",
//     backgroundColor: "#8A80A8",
//     borderRadius: 15,
//     justifyContent:"center",
//     alignItems: 'center',
//     // width: 200,
//     height:40
//   },
//   signupContainer: {
//     alignItems: "center",
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   signupText: {
//     color: "white",
//     marginRight: 5,
//   },
//   signupButton: {
//     backgroundColor: "#604b62",
//     borderRadius: 8,
//     height:30,
//     width:40,
//     alignItems:"center", justifyContent: "center", flexDirection: "column"
//    },
//    main:{
//     height:600,
//     alignItems:"center", justifyContent: "center", flexDirection: "column"

//    }

// })


import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { EvilIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser,addAuthUser } from '../../redux/slice/authSlice';

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);
  const user = useSelector((state) => state.auth.authUser);
   console.log(authError,"heyyy")

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
        await dispatch(addAuthUser(loginData));
        await dispatch(loginUser( loginData.email, loginData.password)); // Then login
    
        if (authError) { 
          navigation.navigate('WallScreen');
        }
        else{
          console.log(authError)
        }
      } catch (error) {
        console.error('Login error:', error);
      }
   
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
                navigation.navigate("screen");
              }}
            >
              <EvilIcons name="close" size={15} color="white" />
            </TouchableOpacity>
            {/*  */}
          </View>
      </View>
     
        <View style={styles.mainContainer}>

          <View style={{ margin: 20, marginTop: 10 }}>
          {authError ? <Text >enter valid email</Text> : null}
            <Text style={{ color: "black", fontWeight:"200", marginBottom:10 }}>Email</Text>
            <TextInput
              value={loginData.email}
              onChangeText={(text) => handleUpdateState("email", text)}
              style={styles.TextInput}
              placeholderTextColor="#dfe3eb"
              placeholder="kofo@gmail.com"
            ></TextInput>
          </View>

          <View style={{ margin: 20}}>
            <Text style={{ color: "black", fontWeight:"200", marginBottom:10  }}>Password</Text>
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
              <Text style={{ color: "white" }}>Login</Text>
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
    flex: 1,
    height:200,
   width: 400,
  //  backgroundColor:"red",
  //  justifyContent:"center"

  },
  mainContainer: {
    backgroundColor: "#F9FFFD",
    width: 370,
    borderRadius: 50,
    height: 500,
    flex: 4,
    // justifyContent:"center",
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