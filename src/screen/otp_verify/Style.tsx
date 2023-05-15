import React from "react";

import { StyleSheet } from "react-native";
import { FontName, FontSize } from "../../utils/FontName";
import MyButton from "../../component/Button";
import MyColor from "../../utils/MyColor";
import MyText from "../../utils/Text";
import { MyImage } from "../../utils/MyImage";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: hp("3%"),
  },
  verifyText: {
    fontFamily: FontName.SEN_BOLD,
    fontSize: FontSize.TWO,
    textAlign: "center",
    color: MyColor.GREEN,
  },
  ChatsApp_will_Text: {
    fontFamily: FontName.SEN,
    fontSize: FontSize.ONE_POINT_FIVE,
    textAlign: "center",
    marginTop: hp("5%"),
    color: MyColor.BLACK,
  },
  textInput: {
    marginLeft: hp("2%"),
    fontFamily: FontName.SEN,
    fontSize: FontSize.TWO,
  },
  button: {
    width: "100%",
    height: hp("6%"),
  },
  buttonText: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.WHITE,
    fontSize: FontSize.TWO,
  },
  buttonView: {
    position: "absolute",
    bottom: 100,
    width: "90%",
    alignSelf: "center",
  },
  wrongNotext: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.RED,
  },
  OtpView: {
    width: "100%",
    height: hp("5%"),
    marginTop: hp("5%"),
    alignSelf: "center",
  },
  enterCodeText: {
    color: MyColor.GREY,
    fontFamily: FontName.SEN,
    marginTop: hp("2%"),
    textAlign: "center",
  },
  resendSmsView: {
    width: "100%",
    justifyContent: "space-between",
    height: hp("5%"),
    marginTop: hp("9%"),
    flexDirection: "row",
    alignItems: "center",
  },
  smsImage: {
    width: 20,
    height: 20,
  },
  resendSmstext: {
    fontSize: FontSize.ONE_POINT_FIVE,
    color: MyColor.BLACK,
    fontFamily: FontName.SEN_BOLD,
    marginLeft: hp("4%"),
    position: "absolute",
  },
  timerText: {
    fontSize: FontSize.ONE_POINT_FIVE,
    color: MyColor.BLACK,
    fontFamily: FontName.SEN_BOLD,
    marginLeft: hp("2%"),
  },
});

export default Styles;
