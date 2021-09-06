import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Image,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { getProducts } from "../../redux/actions/userActions";
import { connect, useDispatch } from "react-redux";
import { FlatGrid } from "react-native-super-grid";

function WallScreen({ navigation, products }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  useEffect(() => {
    if (products.length > 0) setLoading(false);
    else setLoading(true);
  }, [products]);

  return (
    <>
      <View style={styles.container}>
        <FlatGrid
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => getProducts(dispatch)}
            />
          }
          showsVerticalScrollIndicator={false}
          data={products}
          renderItem={({ item }) => {
            return (
              <View style={{}}>
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

                  <Text
                    style={{
                      marginTop: 8,
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => `${item.name}-${index}`}
        />

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
            <TouchableOpacity>
              <EvilIcons name="search" size={24} color="#b3b3b3" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProfileScreen");
              }}
            >
              <MaterialIcons name="person" size={24} color="#b3b3b3" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
// =

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9e6f5",
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
const mapStateToProps = (state) => {
  return {
    auth: state,
    user: state,
    products: state.products,
  };
};

export default connect(mapStateToProps)(WallScreen);
