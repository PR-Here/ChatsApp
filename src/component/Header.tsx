import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Header({ }) {
  return (
    <SafeAreaView>
      <Text>Header</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
