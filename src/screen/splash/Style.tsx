import React from "react";

import { StyleSheet } from "react-native";
import MyColor from "../../utils/MyColor";
import { FontName, FontSize } from "../../utils/FontName";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColor.WHITE,
    justifyContent: "space-around",
  },
  welcomeText: {
    color: MyColor.BLACK,
    fontSize: FontSize.TWO_POINT_FIVE,
    fontFamily: FontName.SEN_BOLD,
    textAlign: "center",
    marginTop: hp("6%"),
  },
  descText: {
    color: MyColor.BLACK,
    fontSize: FontSize.ONE_POINT_FIVE,
    fontFamily: FontName.SEN,
  },
  policyView: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  termsServicesText: {
    color: MyColor.BLUE,
    fontSize: FontSize.ONE_POINT_FIVE,
    fontFamily: FontName.SEN,
    marginLeft: 3,
  },
  readView: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    width: "90%",
    height: hp("6%"),
    marginTop: hp("2%"),
  },
  firstView: {
    flex: 6,
  },
  secondView: {
    flex: 1,
  },
});

export default Styles;
