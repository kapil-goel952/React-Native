import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

export default function HomeHero() {

  return (

    <View style={styles.container}>

      {/* Left Content */}
      <View style={styles.textContainer}>

        <Text style={styles.greeting}>
          Hello, Kapil 👋
        </Text>

        <Text style={styles.subText}>
          Find the best jobs{"\n"}
          that match you
        </Text>

      </View>

      {/* Right Image */}
      <Image
        source={{uri:"https://static.vecteezy.com/system/resources/thumbnails/017/476/196/small/man-with-magnifying-glass-semi-flat-color-character-checking-job-vacancy-editable-figure-full-body-person-on-white-simple-cartoon-style-illustration-for-web-graphic-design-and-animation-vector.jpg"}}
        style={styles.heroImage}
      />

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 30,
    paddingHorizontal: 20,
  },

  textContainer: {
    flex: 1,
  },

  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1F1F1F",

    marginBottom: 10,
  },

  subText: {
    fontSize: 16,
    lineHeight: 24,

    color: "#6B7280",

    fontWeight: "400",
  },

  heroImage: {
    width: 140,
    height: 140,

    resizeMode: "contain",
  },

});