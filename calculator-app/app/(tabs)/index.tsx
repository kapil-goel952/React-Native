
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (

    <LinearGradient
      colors={["#ffffff", "#ff5e62"]}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={{
        flex: 1,
      }}
    >
      <View style={{
        width: 30,
        minWidth: 270,
        maxWidth: 350,
        height: 600,
        minHeight: 280,
        maxHeight: 800,
        backgroundColor: "blue",
        opacity: 1,
        borderColor: "grey",
        borderWidth: 5,
        borderRadius: 8,
        borderTopWidth: 30,
        borderBottomWidth: 30,
        borderLeftWidth: 8,
        borderRightWidth: 8,
        padding: 20,
        margin: 60,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        alignItems: "center",
        flexWrap: "wrap",
        // position: "relative",
        top: 50,
        bottom: 50,
        left: 20,
        right: 20,
        elevation: 40,
        shadowColor: "green",
        shadowOpacity: 0.5,
        shadowRadius: 100,
        overflow: "scroll",
        transform: [{ rotate: "1deg" }, { translateX: 1 }],

      }}>
        {/* <text >
          hello
        </text> */}
      </View>
      </LinearGradient>
    // </View>
  );
}