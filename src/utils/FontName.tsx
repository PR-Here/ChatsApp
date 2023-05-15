import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const FontName = {
  SEN_BOLD: "Sen-Bold",
  SEN_EXTRABOLD: "Sen-ExtraBold",
  SEN: "Sen-Regular",
};
const FontSize = {
  ONE: hp("1%"),
  ONE_POINT_FIVE: hp("1.5%"),
  TWO: hp("2%"),
  TWO_POINT_FIVE: hp("2.5%"),
  THREE: hp("3%"),
  THREE_POINT_FIVE: hp("3.5%"),
  FOUR: hp("4%"),
  FOUR_POINT_FIVE: hp("4.5%"),
};

export { FontName, FontSize };
