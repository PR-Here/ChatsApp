import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import MyStack from "./src/navigation/StackNavigation";

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
