import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const LandingPage = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeInAnimation = Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
   });

   
  useEffect(() => {
    const startAnimation = () => {
      fadeInAnimation.start(navigateToWallScreen); // Start the animation and navigate when it's done
    };

    setTimeout(startAnimation, 3000); // Simulating a 1-second delay before starting the animation
  }, [fadeInAnimation]);

  const navigateToWallScreen = () => {
    navigation.navigate('WallScreen');
  };

 

  // useEffect(() => {
  //   const navigateToWallScreen = () => {
  //     navigation.navigate('WallScreen');
  //   };

  //   const startAnimation = () => {
  //     fadeInAnimation.start(navigateToWallScreen); // Start the animation and navigate when it's done
  //   };

  //   setTimeout(startAnimation, 3000); // Simulating a 3-second delay before starting the animation
  // }, [navigation, fadeInAnimation]);

  return (
    <View style={styles.container}>
          <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim }]}>Welcome To AesBuy!</Animated.Text>
      {/* <Text style={[styles.welcomeText, { opacity: fadeAnim }]}>Welcome to aesbuy!</Text>
      You can add more content here, like an image or additional text */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e6f5',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default LandingPage;
