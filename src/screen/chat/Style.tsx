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
    backgroundColor: MyColor.WHITE,
  },
  chatView: {
    width: "100%",
    padding: 10,
    alignSelf: "center",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: MyColor.GREY,
    flexDirection: "row",
  },
  userNameText: {
    fontFamily: FontName.SEN_BOLD,
    fontSize: FontSize.TWO_POINT_FIVE,
    color: MyColor.BLACK,
  },
  profileImage: {
    width: wp(10),
    height: hp(6),
    marginLeft: hp(1),
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
  timeText: {
    position: "absolute",
    right: 10,
    fontFamily: FontName.SEN,
    fontSize: FontSize.ONE_POINT_FIVE,
  },
  contactButton: {
    width: "30%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100 / 2,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default Styles;
