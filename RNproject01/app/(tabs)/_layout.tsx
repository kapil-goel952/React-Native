import { Tabs } from "expo-router";
import {
  Image,
  StyleSheet,
} from "react-native";

export default function TabsLayout() {

  return (

    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarShowLabel: true,

        tabBarStyle: styles.tabBar,

        tabBarLabelStyle: styles.label,

        tabBarActiveTintColor: "#7950F2",

        tabBarInactiveTintColor: "#9CA3AF",
      }}
    >

      {/* HOME */}
      <Tabs.Screen
        name="Home/home"
        options={{
          title: "Home",

          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: "https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=7950F2"
              }}
              style={[
                styles.icon,
                {
                  tintColor: focused
                    ? "#7950F2"
                    : "#9CA3AF",
                },
              ]}
            />
          ),
        }}
      />

      {/* PEOPLE */}
      <Tabs.Screen
        name="People/people"
        options={{
          title: "People",

          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: "https://img.icons8.com/?size=100&id=102261&format=png&color=7950F2"
              }}
              style={[
                styles.icon,
                {
                  tintColor: focused
                    ? "#7950F2"
                    : "#9CA3AF",
                },
              ]}
            />
          ),
        }}
      />

      {/* SAVED */}
      <Tabs.Screen
        name="Saved/saved"
        options={{
          title: "Saved",

          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: "https://img.icons8.com/?size=100&id=59740&format=png&color=7950F2"
              }}
              style={[
                styles.icon,
                {
                  tintColor: focused
                    ? "#7950F2"
                    : "#9CA3AF",
                },
              ]}
            />
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile/profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: "https://img.icons8.com/?size=100&id=60023&format=png&color=7950F2"
              }}
              style={[
                styles.icon,
                {
                  tintColor: focused
                    ? "#7950F2"
                    : "#9CA3AF",
                },
              ]}
            />
          ),
        }}
      />

    </Tabs>
  );
}

const styles = StyleSheet.create({

  tabBar: {

    position: "absolute",

    bottom: 15,
    left: 20,
    right: 20,

    height: 70,

    borderRadius: 20,

    paddingTop: 8,
    paddingBottom: 10,

    backgroundColor: "#FFFFFF",

    borderTopWidth: 0,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },

  label: {
    fontSize: 12,
    fontWeight: "600",
  },

  icon: {
    width: 24,
    height: 24,

    resizeMode: "contain",
  },

});