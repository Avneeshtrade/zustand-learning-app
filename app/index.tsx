import Router from "@/components/Router";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import React from "react";

const App: React.FC = () => {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default App;
