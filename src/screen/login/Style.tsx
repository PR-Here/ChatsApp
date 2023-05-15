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
    color: MyColor.BLACK,
  },
  ChatsApp_will_Text: {
    fontFamily: FontName.SEN,
    fontSize: FontSize.ONE_POINT_FIVE,
    textAlign: "center",
    marginTop: hp("5%"),
    color: MyColor.BLACK,
  },
  tocableCountryCode: {
    width: "80%",
    alignSelf: "center",
    borderBottomWidth: 1,
    marginTop: hp("4%"),
  },
  textCountryCode: {
    color: MyColor.BLACK,
    fontSize: FontSize.TWO,
    fontFamily: FontName.SEN,
    textAlign: "left",
  },
  mobileNoView: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: hp("4%"),
    width: "80%",
    height: hp("5%"),
    alignItems: "center",
    borderBottomWidth: 1,
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
  agetextView: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  youMustText: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: FontSize.ONE_POINT_FIVE,
  },
  yearOldtext: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.RED,
    fontSize: FontSize.ONE_POINT_FIVE,
  },
});

export default Styles;
