import React from "react";
import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Chat, Status, Call } from "../screen";
import { FontName, FontSize } from "../utils/FontName";
import MyColor from "../utils/MyColor";
import Styles from "./Style";
import MyText from "../utils/Text";
import { MyImage } from "../utils/MyImage";

const Tab = createMaterialTopTabNavigator();

const DashBoard = () => {
  return (
    <SafeAreaView style={Styles.container}>
      {/* Profile Picture and Name Header */}
      <View style={Styles.appNameView}>
        <Text style={Styles.appNameText}>{MyText.app_name}</Text>
        <TouchableOpacity style={Styles.profileImageView}>
          <Image style={Styles.ProfileImage} source={MyImage.APP_LOGO} resizeMode="contain"/>
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontFamily: FontName.SEN,
            color: MyColor.BLACK,
            fontSize: FontSize.TWO,
            textTransform: "capitalize",
          },
          tabBarIndicatorStyle: {
            borderBottomWidth: 2,
            borderBottomColor: MyColor.GREEN,
          },
          tabBarScrollEnabled: false,
          tabBarContentContainerStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Call" component={Call} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default DashBoard;
