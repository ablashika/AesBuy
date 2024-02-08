import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, logoutUser} from '../redux/slice/authSlice';

export default function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.authUser.authUser);
  console.log(currentUser,"curr")


  useEffect(() => {
        
       dispatch(fetchUserData(currentUser.uid));  
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate("screen");
  }
  const users = useSelector((state) => state.auth.user);



  return (
    <View style={styles.container}>
    <View style={styles.profile}>
    <View style={styles.profileBox}>
        <View style={styles.imageBox}>
     <Text style={styles.imageText}>
     {users.name ? users.name[0] : ''}
     </Text>
        </View>
      
      </View>
      <View style={styles.profileTextBox}>
           <Text style={styles.profileNameText}>{users.name}</Text>
         <Text style={styles.greyText}>{users.email}</Text>
        </View>
    </View>
      <View
        style={styles.box}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AddProduct");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Supply product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FFFD",
  },



profile:{
flex:2,
flexDirection:"column",
justifyContent:"flex-start",
alignContent:"center"
},



  imageBox: {
    margin: 30,
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: "white",
    justifyContent:"center",
    alignItems:"center"
  },

  imageText:{
     fontWeight:"bold",
     fontSize:80,
     color:"#e9e6f5"
  },
  profileBox: {
    alignItems: "center", 
    flexDirection: "row",
    backgroundColor: "#e9e6f5",
    flexDirection: "column"
  },

  
greyText:{
  color:"#333",
  fontSize:12
},

profileNameText:{
  color:"#333",
  fontSize:30,
},

profileTextBox:{
 justifyContent:"center",
 alignItems:"center",
 height:80,
 flexDirection: "column",
},




box: {
  alignItems: "center",
  flex:3
},

button: {
  marginTop: 10,
  padding: 15,
  backgroundColor: '#a797bd',
  borderRadius: 8,
  alignItems: 'center',
  width:200
},
buttonText: {
  fontWeight: 'bold',
  color: 'white',
},


});

