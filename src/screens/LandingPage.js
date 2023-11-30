import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated,TouchableOpacity } from 'react-native';

const LandingPage = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeInAnimation = Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
   });

   
  useEffect(() => {
    const startAnimation = () => {
      fadeInAnimation.start(); // Start the animation and navigate when it's done
    };

    setTimeout(startAnimation, 3000); // Simulating a 1-second delay before starting the animation
  }, [fadeInAnimation]);

  // const navigateToWallScreen = () => {

  // };

 

  return (
    <View style={styles.container}>
          <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim }]}>Welcome To AesBuy!</Animated.Text>
    
          <View >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
     
        >

        <Text style={{ fontWeight: "bold" }}
          >Want To Supply Dope Out fit?</Text>
    
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("WallScreen");
          }}
        >
          <Text style={{ fontWeight: "bold" }}
          >Check Out Our Dope OutFit</Text>
        </TouchableOpacity>
      </View>

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
