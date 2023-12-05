import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, StyleSheet } from "react-native";

const BouncingLoader = () => {
  const bounceValue = useRef(new Animated.Value(1)).current;

  const startBouncingAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, { toValue: 1.1, duration: 500, easing: Easing.linear, useNativeDriver: false }),
        Animated.timing(bounceValue, { toValue: 1, duration: 500, easing: Easing.linear, useNativeDriver: false }),
      ])
    ).start();
  };

  useEffect(() => {
    startBouncingAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.loader, { transform: [{ scale: bounceValue }] }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 30,
    height: 30,
    backgroundColor: "#a797bd",
    borderRadius: 15,
  },
});

export default BouncingLoader;
