// import React, { useEffect, useRef } from 'react';
// import { View, Text, StyleSheet, Animated,TouchableOpacity } from 'react-native';

// const LandingPage = ({ navigation }) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   const fadeInAnimation = Animated.timing(fadeAnim, {
//     toValue: 1,
//     duration: 3000,
//     useNativeDriver: true,
//    });

   
//   useEffect(() => {
//     const startAnimation = () => {
//       fadeInAnimation.start();
//     };

//     setTimeout(startAnimation, 3000); 
//   }, [fadeInAnimation]);

  

 

//   return (
//     <View style={styles.container}>
//           <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim }]}>Welcome To AesBuy!</Animated.Text>
    
//           <View >
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("LogIn");
//           }}
     
//         >

//         <Text style={{ fontWeight: "bold" }}
//           >Want To Supply Dope Out fit?</Text>
    
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("WallScreen");
//           }}
//         >
//           <Text style={{ fontWeight: "bold" }}
//           >Check Out Our Dope OutFit</Text>
//         </TouchableOpacity>
//       </View>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#e9e6f5',
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

// export default LandingPage;
import React, { useEffect, useRef,useState } from 'react';
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
      fadeInAnimation.start();
      setAnimationComplete(true);
    };

    setTimeout(startAnimation, 3000);

  }, [fadeInAnimation]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.welcomeText, { opacity: fadeAnim }]}>Welcome To AesBuy!</Animated.Text>

      {isAnimationComplete ? (
        <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LogIn');
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Want To Supply Dope Outfit?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WallScreen');
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Check Out Our Dope Outfit</Text>
        </TouchableOpacity>
      </View>
  
      ) : 
      null
      }
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
  buttonsContainer: {
    marginTop: 20,
  },
  button: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#a797bd',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LandingPage;
