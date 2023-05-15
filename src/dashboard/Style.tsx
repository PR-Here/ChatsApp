import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MyColor from "../utils/MyColor";
import { FontName, FontSize } from "../utils/FontName";

const Styles = StyleSheet.create({
  profileImageView: {
    width: wp(11),
    height: hp(6),
    borderRadius: 100 / 2,
    margin: hp(1),
    alignItems: "center",
    justifyContent: "center",
  },
  appNameText: {
    fontFamily: FontName.SEN_BOLD,
    color: MyColor.BLACK,
    fontSize: FontSize.TWO,
  },
  appNameView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: MyColor.WHITE,
  },
  container: { flex: 1, backgroundColor: "white" },
  ProfileImage: {
    alignSelf: "center",
    tintColor: MyColor.BLACK,
  },
});

export default Styles;
