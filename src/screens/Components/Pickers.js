import React, { useState } from "react";
import { View, Picker } from "react-native";

export default function Pickers({ selectedValue, setSelectedValue }) {
  return (
    <View>
      <Picker
        mode="dialog"
        selectedValue={selectedValue}
        style={{
          height: 50,
          marginHorizontal: 20,
          backgroundColor: "transparent",
        }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="clothes" color="white" value="clothes" />
        <Picker.Item label="shoes" color="white" value="shoes" />
      </Picker>
    </View>
  );
}
