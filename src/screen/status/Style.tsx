import { StyleSheet } from "react-native";
import MyColor from "../../utils/MyColor";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontName, FontSize } from "../../utils/FontName";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: hp(3),
  },
  uplodadStatusView: {
    flexDirection: "row",
    height: hp("6%"),
    marginTop: hp("3%"),
    width: "100%",
  },
  statusButtonTop: {
    width: wp(12),
    height: wp(12),
    backgroundColor: MyColor.GREEN,
    borderRadius: 100 / 2,
    justifyContent: "center",
  },
  statusImage: {
    width: 20,
    height: 20,
    alignSelf: "center",
    tintColor: MyColor.WHITE,
  },
  tapHereView: {
    marginLeft: hp(2),
    justifyContent: "space-around",
  },
  tapHereText: {
    fontFamily: FontName.SEN,
    color: MyColor.BLACK,
    fontSize: FontSize.TWO,
  },
  recentText: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: FontSize.TWO,
    marginTop: hp(5),
  },
  chatView: {
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    paddingTop: 5,
  },
  userNameText: {
    fontFamily: FontName.SEN_BOLD,
    fontSize: FontSize.TWO_POINT_FIVE,
    color: MyColor.BLACK,
  },
  profileImage: {
    width: wp(10),
    height: hp(6),
  },
  nameView: {
    marginLeft: hp(3),
    justifyContent: "space-around",
  },
  msgText: {
    fontFamily: FontName.SEN,
    fontSize: FontSize.TWO,
    color: MyColor.BLACK,
  },
  statusButton: {
    width: "30%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100 / 2,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  viewed_updateText:{
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: FontSize.TWO,
  }
});

export default Styles;
