
import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, StyleSheet, } from "react-native";

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
      <Animated.View style={styles.outerCircle}>
        <Animated.View style={[styles.innerCircle, { transform: [{ scale: bounceValue }] }]} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  outerCircle: {

     // 
    // 
    width: 50,
    height: 50,
    backgroundColor: "#9cd6bd", // Slightly lighter shade
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 30,
    height: 30,
    backgroundColor: "#01383b",
    borderRadius: 15,
  },
});

export default BouncingLoader;
