import React, { useEffect,useState } from "react";
import { View, StyleSheet, Text, Image, RefreshControl, TouchableOpacity } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setProducts, addToSelectedItems,setLoading } from "../../redux/slice/userSlice";
import { FlatGrid } from "react-native-super-grid";
import Authenticated from "../Components/Authenticated";
import BouncingLoader from "../Components/Loader";



function WallScreen({ navigation }) {
  
  const dispatch = useDispatch();
  const products = useSelector((state) => state.user.products);
  const [toggleStates, setToggleStates] = useState({});
  const [loadingData, setLoadingData] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.login);
  


  useEffect(() => {
    dispatch(getProducts()); 
    dispatch(setLoading(true)) 
  }, [dispatch]);
  useEffect(() => {
    console.log("currentUser changed:", isAuthenticated);
  }, [isAuthenticated]);


  const loading = useSelector((state) => state.user.loading);
  console.log(loading,"heyy")


  const onRefresh = async () => {
    dispatch(setLoading(true));
    setLoadingData(true);
  
    try {
      dispatch(setProducts([]));
      await dispatch(getProducts());
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoadingData(false);
      dispatch(setLoading(false));
    }
  };
  

  const onHeartClick = (itemId) => {

    setToggleStates((prevToggleStates) => ({
      ...prevToggleStates,
      [itemId]: !prevToggleStates[itemId],
    }));
    
      dispatch(addToSelectedItems(itemId));
    
  }
  if (loading || loadingData) {
    return (
      <View style={styles.container}>
        <BouncingLoader/>
      </View>
    );
  }


  return (
    <View style={styles.container}>
     
        <FlatGrid
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh}  />
        }
        showsVerticalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Newscreen", {
                  item_details: item,
                })
              }
            >
              <Image
                source={{ uri: "data:image/jpeg;base64," + item.image }}
                style={{
                  height: Math.round(Math.random()) ? 200 : 280,
                  alignSelf: "stretch",
                  borderRadius: 30,
                }}
                resizeMode="cover"
              />

              <Text style={{ margin: 8,  color:"#333", fontWeight:"bold", fontSize:11  }}>{item.name}</Text>

              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  zIndex: 1,
                }}
                onPress={() => onHeartClick(item.id)}
              >
                <MaterialIcons
                  name={toggleStates[item.id]  ? "favorite" : "favorite-border"}
                  size={24}
                  color="#01383b"
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => `${item.id}`}
      />
      
      <Authenticated  navigation={navigation} isAuthenticated={isAuthenticated}/>
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


export default WallScreen;
