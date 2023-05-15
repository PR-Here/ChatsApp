import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Styles from "./Style";
import Lottie from "lottie-react-native";
import { MyImage } from "../../utils/MyImage";
import MyText from "../../utils/Text";
import MyButton from "../../component/Button";
import MyColor from "../../utils/MyColor";

export default function Splash({ navigation }) {
  const animationRef = useRef<Lottie>(null);

  useEffect(() => {
    animationRef.current?.play();
    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 5000);
  }, []);

  const handleClick = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={Styles.container}>
      {/* FirstView */}
      <View style={Styles.firstView}>
        <Text style={Styles.welcomeText}>{MyText.welcome}</Text>
        <Lottie source={MyImage.WORLD} ref={animationRef} />
      </View>
      {/* Second View */}
      <View style={Styles.secondView}>
        <View style={Styles.policyView}>
          <Text style={Styles.descText}>{MyText.read_our}</Text>
          <Text onPress={() => {}} style={Styles.termsServicesText}>
            {MyText.privacy_policy}
          </Text>
          <Text style={Styles.descText}>{MyText.tap}</Text>
          <Text onPress={() => {}} style={Styles.termsServicesText}>
            {MyText.terms_services}
          </Text>
        </View>
        <MyButton
          title={MyText.agree_continue}
          onPress={handleClick}
          colors={[MyColor.GREEN, MyColor.GREEN]}
          containerStyle={Styles.buttonStyle}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
