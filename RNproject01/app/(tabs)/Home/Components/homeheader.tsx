import {
  View,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";

export default function HomeHeader() {

  return (
    <View style={styles.container}>

      {/* Menu Button */}
      <Pressable style={styles.iconButton}>
        <Image
          source={{uri:"https://img.icons8.com/?size=100&id=8113&format=png&color=7950F2"}}
          style={styles.icon}
        />
      </Pressable>

      {/* Notification Button */}
      <Pressable style={styles.iconButton}>
        <Image
          source={{uri:"https://img.icons8.com/?size=100&id=11668&format=png&color=7950F2"}}
          style={styles.icon}
        />
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 20,
  },

  iconButton: {
    width: 45,
    height: 45,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#F5F5F5",

    borderRadius: 14,
  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

});