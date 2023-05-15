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

type MyItemType = { id: string; name: string; msg: string };

export default function Chat({ navigation }) {
  const myData: MyItemType[] = [
    {
      id: "1",
      name: "Jack",
      msg: "Hi! how are you?",
    },
    {
      id: "2",
      name: "Mack",
      msg: "Hi! how are you?",
    },
    {
      id: "3",
      name: "Rack",
      msg: "Hi! how are you?",
    },
    {
      id: "4",
      name: "Pack",
      msg: "Hi! how are you?",
    },
    {
      id: "5",
      name: "Wack",
      msg: "Hi! how are you?",
    },
    {
      id: "6",
      name: "Nack",
      msg: "Hi! how are you?",
    },
    {
      id: "7",
      name: "Rack",
      msg: "Hi! how are you?",
    },
    {
      id: "8",
      name: "Back",
      msg: "Hi! how are you?",
    },
    {
      id: "9",
      name: "Nack",
      msg: "Hi! how are you?",
    },
    {
      id: "10",
      name: "Rack",
      msg: "Hi! how are you?",
    },
    {
      id: "11",
      name: "Back",
      msg: "Hi! how are you?",
    },
  ];

  const renderItem = ({ item }: { item: MyItemType }) => {
    return (
      <TouchableOpacity style={Styles.chatView}>
        <Image style={Styles.profileImage} source={MyImage.PLACEHOLDER} />
        <View style={Styles.nameView}>
          <Text style={Styles.userNameText}>{item.name}</Text>
          <Text style={Styles.msgText}>{item.msg}</Text>
        </View>
        <Text style={Styles.timeText}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };

  // OnPress
  const handleClick = () => {};

  return (
    <View style={Styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={myData}
        renderItem={renderItem}
        keyExtractor={({ item }) => console.log(item)}
      />
      {/* Contact Access Button */}
      <MyButton
        onPress={handleClick}
        title="Contact"
        containerStyle={Styles.contactButton}
        colors={[MyColor.GREEN, MyColor.GREEN]}
      />
    </View>
  );
}
