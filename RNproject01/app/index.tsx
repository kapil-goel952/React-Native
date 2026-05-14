import { View, Text ,ActivityIndicator} from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Index() {

  useEffect(() => {

    setTimeout(() => {
      router.replace("/Home");
    }, 3000);

    }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(109,31,27)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
        }}
      >
        MY APP
      </Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}
