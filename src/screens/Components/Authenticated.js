import React,{useEffect,useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity,Image  } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons, Feather, EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { performImageSearch } from '../../ai/clarifai';
import { getProducts, setProducts, addToSelectedItems,setLoading } from "../../redux/slice/userSlice";
import * as ImagePicker from 'expo-image-picker';


function Authenticated  ({navigation}) {
    const isAuthenticated = useSelector((state) => state.auth.login);
    const products = useSelector((state) => state.user.products);
    const [response, setResponse] = useState(null);
    const [itemId, setItemId] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
  
    // const [imageUrl, setImageUrl] = useState(response);

    // If base64 is available, use it
    // useEffect(() => {
    //   if (response.base64) {
    //     setImageUrl(`data:image/jpeg;base64,${imageData.base64}`);
    //   }
    // }, []);
    useEffect(() => {
      console.log("currentUser changed:", isAuthenticated);
    }, [isAuthenticated]);
  
    useEffect(() => {
      (async () => {
        if (Platform.OS !== "web") {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== "granted") {
            alert("Sorry, we need camera roll permissions to make this work!");
          }
        }
      })();
    }, []);
  
    const pickImage = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.5,
          base64: true,
          assets: true,
        });
  
        if (!result.cancelled) {
          setSelectedImage(result.base64);
        }
      } catch (error) {
        console.error('Error picking image:', error);
      }
    };
  
    const onSearchClick = async () => {
      try {
        // Ensure there is a selected image
        if (!selectedImage) {
          console.warn('No image selected.');
          return;
        }
  
        // Perform image search with Clarifai for the selected image
        const searchResults = await performImageSearch(selectedImage);

        console.log(searchResults.env,"heyyy")
        setResponse(searchResults.data.results[0].input.data.image.url)
        // // Check if there are products and search results
        // if (products.length > 0 && searchResults) {
        //   // Find the first product that has a similar image in the search results
        //   const selectedItem = products.find((product) => searchResults.includes(product.image));
  
        //   if (selectedItem) {
        //     // Set the itemId for the selected product
        //     setItemId(selectedItem.id);
        //   } else {
        //     console.warn('No matching product found.');
        //   }
        // } else {
        //   console.warn('No products or search results available.');
        // }
      } catch (error) {
        console.error('Error during search click:', error);
      }
    };
  

      
      

      
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
      <TouchableOpacity onPress={onSearchClick}>
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
            {selectedImage && (
        <Image
          source={{
            uri: `data:image/jpeg;base64,${selectedImage}`,
          }}
          style={{ height: 50, width: 50 }}
        />
      )}

      {/* Display the image picker */}
      {/* <TouchableOpacity onPress={pickImage}>
        <EvilIcons name="image" size={24} color="black" />
      </TouchableOpacity> */}

    
    </View>


    {/* <Image
        style={styles.image}
         source={`data:image/jpeg;base64,${response}`}
        resizeMode="contain"
      /> */}

  </View>
  )
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