import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Styles from "./Style";
import MyText from "../../utils/Text";
import { CountryPicker } from "react-native-country-codes-picker";
import MyColor from "../../utils/MyColor";
import MyButton from "../../component/Button";
import OTPTextInput from "react-native-otp-textinput";
import { MyImage } from "../../utils/MyImage";

export default function OtpVerify({ navigation }) {
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState("");
  let otpInput = useRef(null);

  // Next Button Click
  const handleClick = () => {
    otpInput.current.clear();
    navigation.navigate("Dashboard");
  };

  // Timer UseEffect
  useEffect(() => {
    // decrement the timer every second
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // re-send OTP when the timer reaches 0
    if (timer === 0) {
      clearInterval(interval);
    }

    // cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [timer]);

  const resendOtp = () => {
    setTimer(60); // reset the timer
  };

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.verifyText}>OtpVerify +91 (513) 468-7250</Text>
      <Text style={Styles.ChatsApp_will_Text}>
        {`Waiting to automatically detect an SMS sent to\n +91 (513) 468-7250. `}
        <Text onPress={() => {}} style={Styles.wrongNotext}>
          Wrong number?
        </Text>
      </Text>

      {/* Mobile Number View */}
      <View style={Styles.OtpView}>
        <OTPTextInput ref={otpInput} inputCount={6} autoFocus={false} />
        <Text style={Styles.enterCodeText}>Enter 6-digit code</Text>
      </View>
      {/* Resend SMS View */}
      <View style={Styles.resendSmsView}>
        <Image style={Styles.smsImage} source={MyImage.SMS} />

        <Text
          onPress={() => {
            if (timer <= 0) resendOtp();
          }}
          style={[
            Styles.resendSmstext,
            { color: timer > 0 ? MyColor.GREY : MyColor.BLACK },
          ]}
        >
          Resend SMS
        </Text>

        {/* Timer */}
        {timer > 0 ? (
          <Text style={Styles.timerText}>{timer} seconds</Text>
        ) : (
          <Text style={Styles.timerText}>00:00</Text>
        )}
      </View>

      {/* Button View */}
      <View style={Styles.buttonView}>
        <MyButton
          title="Next"
          colors={[MyColor.GREEN, MyColor.GREEN]}
          containerStyle={Styles.button}
          onPress={handleClick}
          titleStyle={Styles.buttonText}
        />
      </View>
    </SafeAreaView>
  );
}
