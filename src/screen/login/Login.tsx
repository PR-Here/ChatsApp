import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import Styles from "./Style";
import MyText from "../../utils/Text";
import { CountryPicker } from "react-native-country-codes-picker";
import MyColor from "../../utils/MyColor";
import MyButton from "../../component/Button";
import auth from "@react-native-firebase/auth";
import MyErrorMsg from "../../component/MyErrorMsg";

export default function Login({ navigation }) {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");

  // handle enter phone number
  const onChangeText = (newText: string) => {
    if (/[-,. ]/.test(newText)) {
      setError(MyText.enter_valid_mobile);
    } else {
      setError("");
      setMobile(newText);
    }
  };

  // Next Button Click
  const handleClick = () => {
    // navigation.navigate("OtpVerify");
    if (mobile == "") {
      setError("Please enter Phone number.");
    } else if (mobile.length != 10) {
      setError("Please enter a valid Phone number.");
    } else signInWithPhoneNumber(countryCode, mobile);
  };

  // Handle login
  function onAuthStateChanged(user: any) {
    if (user) {
      console.log("USER.... ", user);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber(
    phoneNumber: string,
    countryCode: string
  ) {
    console.log(phoneNumber + countryCode);

    const confirmation = await auth().signInWithPhoneNumber(
      phoneNumber + countryCode
    );
    setConfirm(confirmation);
  }

  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.verifyText}>{MyText.verify_your}</Text>
      <Text style={Styles.ChatsApp_will_Text}>{MyText.chatsapp_will_send}</Text>
      {/* Country Code Picker */}
      <TouchableOpacity
        onPress={() => setShow(true)}
        style={Styles.tocableCountryCode}
      >
        <Text style={Styles.textCountryCode}>{countryCode}</Text>
      </TouchableOpacity>
      {/* Mobile Number View */}
      <View
        style={[
          Styles.mobileNoView,
          { borderBottomColor: !error ? MyColor.BLACK : "red" },
        ]}
      >
        <Text onPress={() => setShow(true)} style={Styles.textCountryCode}>
          {countryCode}
        </Text>
        <TextInput
          style={Styles.textInput}
          placeholder={MyText.enter_mobile}
          keyboardType="numeric"
          maxLength={10}
          onChangeText={(e) => onChangeText(e)}
          returnKeyType="done"
        />
      </View>
      {/* Mobile Error Msg */}
      {error ? <MyErrorMsg show={true} msg={error} /> : null}
      {/* Button View */}
      <View style={Styles.buttonView}>
        <MyButton
          title="Next"
          colors={[MyColor.GREEN, MyColor.GREEN]}
          containerStyle={Styles.button}
          onPress={handleClick}
          titleStyle={Styles.buttonText}
        />
        {/* Age related Text */}
        <View style={Styles.agetextView}>
          <Text style={Styles.youMustText}>{MyText.you_must_be}</Text>
          <Text style={Styles.yearOldtext}>{MyText.at_least}</Text>
          <Text style={Styles.youMustText}>{MyText.to_register}</Text>
        </View>
      </View>

      {/* For showing picker just put show state to show prop */}
      <CountryPicker
        lang="en"
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          // console.log(item);
          setCountryCode(`${item?.flag}  ${item.dial_code}`);
          setShow(false);
        }}
        style={{
          modal: {
            height: 500,
            backgroundColor: "white",
          },
        }}
        onBackdropPress={() => setShow(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
