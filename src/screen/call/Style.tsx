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
  callIconImage: {
    width: 20,
    height: 20,
    alignSelf: "center",
    tintColor:MyColor.GREEN
  },
  callImageView:{
    position: "absolute",
    right: 30,
    width: 40,
    height: 40,
    justifyContent:'center'
  }
});

export default Styles;
