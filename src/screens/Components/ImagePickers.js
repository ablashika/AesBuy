import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickers({ image, setImage }) {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(result.base64);
    }
  };

  const imageView = () => {
    if (image) {
      return (
        <Image
          source={{
            uri: "data:image/jpeg;base64," + image,
          }}
          style={{ height: 30, width: 30, borderRadius: 5 }}
        />
      );
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        onPress={pickImage}
      >
        <EvilIcons name="image" size={24} color="black" />

        {imageView()}
      </TouchableOpacity>
    </View>
  );
}
