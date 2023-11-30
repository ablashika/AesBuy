import { View, Text, StyleSheet,TouchableOpacity,TextInput,ScrollView } from 'react-native'
import React,{useState} from 'react'
import { EvilIcons } from "@expo/vector-icons";

export default function SignUpScreen({navigation}) {

    const [authUser, setAuthUser] = useState({
          name: "",
          email: "",
          phoneNumber: ""
      });
  return (

    <View style={styles.container}>
         
           <View style={{flex:0.2, backgroundColor:"green"}}></View>
       <ScrollView style={styles.main}>
        <ScrollView style={styles.mainContainer}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            margin: 40,
          }}
        >
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
            {/* <Text style={{ color: "white" }}>*</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => handleOnsubmit()}
            style={{
              backgroundColor: "black",
              height: 30,
              width: 80,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "white",}}>submit</Text>
          </TouchableOpacity>
        </View>

        <View style={{ margin: 20, marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Name
          </Text>
          <TextInput
            value={authUser.name}
            onChangeText={(text) => {
              handleUpdateState("name", text);
            }}
            style={{ marginTop: 10 }}
            placeholderTextColor="#dfe3eb"
            placeholder="Mary Ann"
          ></TextInput>
        </View>
      
        <View style={{ margin: 20, marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Email
          </Text>
          <TextInput
            value={authUser.email}
            onChangeText={(text) => {
              handleUpdateState("email", text);
            }}
            style={{ marginTop: 10 }}
            placeholderTextColor="#dfe3eb"
            placeholder="kofo@gmail.com"
          ></TextInput>
        </View>

        <View style={{ margin: 20, marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Phone Number
          </Text>
          <TextInput
            value={authUser.number}
            onChangeText={(text) => {
              handleUpdateState("number", text);
            }}
            style={{ marginTop: 10 }}
            placeholderTextColor="#dfe3eb"
            placeholder="0244205594"
          ></TextInput>
        </View>
        </ScrollView>

        

       
      </ScrollView >
        
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e9e6f5",
      height: 100,
    },
  
    mainContainer: {
      backgroundColor: "#a797bd",
      width: 370, 
      borderRadius: 50,
      height:700
    },

    main:{
      backgroundColor: "#e9e6f5",
      width: 370,
      height: 100,
      flex: 5.8,
      borderTopEndRadius: 50,
      borderTopStartRadius: 50,
      // flex: 5.5,
    }
  });

  