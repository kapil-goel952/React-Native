import {
  
  ScrollView,
  StyleSheet,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Components/homeheader";
import HomeHero from "./Components/homehero";
import HomeSearch from "./Components/homesearch";
import RecommendedJobs from "./Components/recommended_jobs";

export default function Home() {

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >

        {/* Header */}
        <Header />

        {/* Hero Section */}
        <HomeHero />

        {/* Search Section */}
        <HomeSearch />

        {/* Recommended Jobs */}
        <RecommendedJobs />

      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContainer: {
    paddingTop: 20,
    paddingBottom: 120,
  },

});