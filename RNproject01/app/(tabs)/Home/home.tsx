import {
  
  ScrollView,
  StyleSheet,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Components/homeheader";
import HomeHero from "./Components/homehero";
import HomeSearch from "./Components/homesearch";
import RecommendedJobs from "./Components/recommended_jobs";
import Footer from '../../../components/Footer'

export default function Home() {

  return (

    <SafeAreaView style={styles.container}>


        {/* Header */}
        <Header />

        {/* Hero Section */}
        <HomeHero />

        {/* Search Section */}
        <HomeSearch />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >

        {/* Recommended Jobs */}
        <RecommendedJobs />

    <Footer/>
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