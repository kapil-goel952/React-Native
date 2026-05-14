import {
  View,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";

export default function HomeSearch() {

  return (

    <View style={styles.container}>

      {/* Search Input */}
      <TextInput
        placeholder="Search for jobs, roles, companies..."
        placeholderTextColor="#9CA3AF"
        style={styles.input}
      />

      {/* Search Button */}
      <Pressable style={styles.searchButton}>

        <Image
          source={{uri:"https://img.icons8.com/?size=100&id=7695&format=png&color=FFFFFF"}}
          style={styles.searchIcon}
        />

      </Pressable>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 20,

    marginBottom: 30,
  },

  input: {
    flex: 1,

    height: 55,

    backgroundColor: "#F5F5F5",

    borderRadius: 16,

    paddingHorizontal: 18,

    fontSize: 15,

    color: "#1F1F1F",

    marginRight: 12,
  },

  searchButton: {
    width: 55,
    height: 55,

    backgroundColor: "#7950F2",

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 16,
  },

  searchIcon: {
    width: 22,
    height: 22,

    resizeMode: "contain",

    tintColor: "#FFFFFF",
  },

});