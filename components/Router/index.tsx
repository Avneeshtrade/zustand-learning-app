import React from "react";
import { Navigator, Screen } from "@/types/stack";
import HomeScreen from "../Home";
import DetailsScreen from "../Details";
import SettingsScreen from "../Settings";
import { StyleSheet, View } from "react-native";
import Footer from "../Footer";
import Header from "../Header";

const Router: React.FC = () => {
  return (
    <>
      <Header />
      <Navigator
        screenOptions={{
            headerShown: false
        }}
      >
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Details" component={DetailsScreen} />
        <Screen name="Settings" component={SettingsScreen} />
      </Navigator>
      <Footer />
    </>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    minHeight: "100%",
  },
});
export default Router;
