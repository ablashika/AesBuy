// ToggleHeart.js
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToSelectedItems } from "../../redux/slice/userSlice";

const ToggleHeart = ({ itemId }) => {
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);

  const onHeartClick = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
    dispatch(addToSelectedItems(itemId));
  };

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 8,
        right: 8,
        zIndex: 1,
      }}
      onPress={onHeartClick}
    >
      <MaterialIcons
        name={isToggled ? "favorite" : "favorite-border"}
        size={24}
        color="#333"
      />
    </TouchableOpacity>
  );
};

export default ToggleHeart;
