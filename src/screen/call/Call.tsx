import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Styles from "./Style";
import MyButton from "../../component/Button";
import MyText from "../../utils/Text";
import { MyImage } from "../../utils/MyImage";
import MyColor from "../../utils/MyColor";

type MyItemType = { id: string; name: string; msg: string; image: Image };

export default function Call({ navigation }) {
  const myData: MyItemType[] = [
    {
      id: "1",
      name: "Jack",
      msg: "Today, 1:00 AM",
      image: MyImage.AUDIO,
    },
    {
      id: "2",
      name: "Mack",
      msg: "Yesterday, 1:00 AM",
      image: MyImage.VIDEO,
    },
    {
      id: "3",
      name: "Rack",
      msg: "9 December, 1:00 AM",
      image: MyImage.AUDIO,
    },
    {
      id: "4",
      name: "Pack",
      msg: "11 January, 1:00 AM",
      image: MyImage.AUDIO,
    },
    {
      id: "5",
      name: "Wack",
      msg: "10 March, 1:00 AM",
      image: MyImage.VIDEO,
    },
    {
      id: "6",
      name: "Nack",
      msg: "13 March, 1:00 AM",
      image: MyImage.AUDIO,
    },
    {
      id: "7",
      name: "Rack",
      msg: "22 March, 1:00 AM",
      image: MyImage.AUDIO,
    },
    {
      id: "8",
      name: "Back",
      msg: "1 April, 1:00 AM",
      image: MyImage.VIDEO,
    },
    {
      id: "9",
      name: "Nack",
      msg: "11 April, 1:00 AM",
      image: MyImage.VIDEO,
    },
    {
      id: "10",
      name: "Rack",
      msg: "12 April, 1:00 AM",
      image: MyImage.VIDEO,
    },
    {
      id: "11",
      name: "Back",
      msg: "1 May, 1:00 AM",
      image: MyImage.AUDIO,
    },
  ];

  const renderItem = ({ item }: { item: MyItemType }) => {
    return (
      <View style={Styles.chatView}>
        <Image style={Styles.profileImage} source={MyImage.PLACEHOLDER} />
        <View style={Styles.nameView}>
          <Text style={Styles.userNameText}>{item.name}</Text>
          <Text style={Styles.msgText}>{item.msg}</Text>
        </View>
        <TouchableOpacity style={Styles.callImageView}>
          <Image style={Styles.callIconImage} source={item?.image} />
        </TouchableOpacity>
      </View>
    );
  };

  // OnPress
  const handleClick = () => {};

  return (
    <View style={Styles.container}>
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={myData}
        renderItem={renderItem}
        keyExtractor={({ item }) => console.log(item)}
      />
    </View>
  );
}
