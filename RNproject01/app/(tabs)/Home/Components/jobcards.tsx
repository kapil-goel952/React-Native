import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

type Props = {
  image: any;
  role: string;
  company: string;
  flexibility: string;
};

export default function JobCard({
  image,
  role,
  company,
  flexibility,
}: Props) {

  return (

    <View style={styles.card}>

      {/* Left Side */}
      <View style={styles.leftSection}>

        <Image
          source={image}
          style={styles.logo}
        />

        <View>

          <Text style={styles.role}>
            {role}
          </Text>

          <Text style={styles.company}>
            {company}
          </Text>

          <Text style={styles.flexibility}>
            {flexibility}
          </Text>

        </View>

      </View>

      {/* Apply Button */}
      <Pressable style={styles.button}>

        <Text style={styles.buttonText}>
          Apply
        </Text>

      </Pressable>

    </View>

  );
}

const styles = StyleSheet.create({

  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 16,

    borderRadius: 18,

    borderWidth: 1,
    borderColor: "#EEEEEE",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    flex: 1,
  },

  logo: {
    width: 52,
    height: 52,

    borderRadius: 14,

    resizeMode: "contain",
  },

  role: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1F1F1F",

    marginBottom: 4,
  },

  company: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4B5563",

    marginBottom: 3,
  },

  flexibility: {
    fontSize: 13,
    color: "#9CA3AF",
  },

  button: {
    backgroundColor: "#7950F2",

    paddingHorizontal: 18,
    paddingVertical: 10,

    borderRadius: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },

});