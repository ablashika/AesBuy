import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const LandingPage = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isAnimationComplete, setAnimationComplete] = useState(false);
  const fadeInAnimation = Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  });

  useEffect(() => {
    const startAnimation = () => {
      fadeInAnimation.start(() => {
        setAnimationComplete(true);
      });
    };

    setTimeout(startAnimation, 3000);

  }, [fadeInAnimation]);

  return (
    <View style={styles.container}>
      <View style={styles.imgBox}></View>
      {isAnimationComplete?
        (null):(
          <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim }]}>
        Welcome To D'trove!
      </Animated.Text>
        )
      }
      {!isAnimationComplete ? null : (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LogIn');
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Want To Supply Outfit?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('WallScreen');
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Check Out Our Outfit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#01383b",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '400',
    color: '#ffffff',
  },
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    marginTop: 10,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: '#e9eeed',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#1C2917',
  },
});

export default LandingPage;
