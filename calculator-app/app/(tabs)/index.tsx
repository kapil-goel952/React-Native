import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.7)).current;
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Text fade + zoom animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();

    // Continuous floating animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -10,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 10,
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <LinearGradient
      colors={["#b492be", "#243B55", "#0F2027"]}
      style={styles.container}
    >
      {/* Background Car Graphics */}
      <MaterialCommunityIcons
        name="car-sports"
        size={180}
        color="rgba(170, 170, 170, 0.08)"
        style={[styles.car, { top: 80, left: 20, transform: [{ rotate: "-15deg" }] }]}
      />

      <MaterialCommunityIcons
        name="car-convertible"
        size={150}
        color="rgba(255,255,255,0.06)"
        style={[styles.car, { bottom: 120, right: 10, transform: [{ rotate: "12deg" }] }]}
      />

      <MaterialCommunityIcons
        name="car-estate"
        size={120}
        color="rgba(255,255,255,0.05)"
        style={[styles.car, { bottom: 40, left: 30, transform: [{ rotate: "-8deg" }] }]}
      />

      {/* Animated Text */}
      <Animated.Text
        style={[
          styles.text,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: floatAnim },
            ],
          },
        ]}
      >
        hahaha you fool
      </Animated.Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    paddingHorizontal: 24,
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
  },
  car: {
    position: "absolute",
  },
});