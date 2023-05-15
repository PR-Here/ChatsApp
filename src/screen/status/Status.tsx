import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Styles from "./Style";
import { MyImage } from "../../utils/MyImage";
import MyText from "../../utils/Text";
import MyButton from "../../component/Button";
import MyColor from "../../utils/MyColor";

type MyItemType = { id: string; name: string; msg: string };

export default function Status() {
  const myData: MyItemType[] = [
    {
      id: "1",
      name: "Jack",
      msg: "Today, 1:12 PM",
    },
    {
      id: "2",
      name: "Mack",
      msg: "Yesterday, 1:12 PM",
    },
    {
      id: "3",
      name: "Rack",
      msg: "Today, 1:12 PM",
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
      </TouchableOpacity>
    );
  };

  const recentView_renderItem = ({ item }: { item: MyItemType }) => {
    return (
      <TouchableOpacity style={Styles.chatView}>
        <Image style={Styles.profileImage} source={MyImage.PLACEHOLDER} />
        <View style={Styles.nameView}>
          <Text style={Styles.userNameText}>{item.name}</Text>
          <Text style={Styles.msgText}>{item.msg}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // OnPress
  const handleClick = () => {};

  return (
    <View style={Styles.container}>
      {/* Upload Status Button */}
      <View style={Styles.uplodadStatusView}>
        <View style={Styles.statusButtonTop}>
          <Image style={Styles.statusImage} source={MyImage.STATUS} />
        </View>
        <TouchableOpacity style={Styles.tapHereView}>
          <Text style={Styles.tapHereText}>{MyText.my_status}</Text>
          <Text style={Styles.tapHereText}>{MyText.tap_here}</Text>
        </TouchableOpacity>
      </View>
      {/* Recent Updates */}
      <Text style={Styles.recentText}>{MyText.recent}</Text>
      {/* Status List */}
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={myData}
        renderItem={renderItem}
        keyExtractor={({ item }) => console.log(item)}
      />
      {/* Recent View Status List */}
      {/* View Status Text  */}
      <Text style={Styles.viewed_updateText}>{MyText.viewed_update}</Text>
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={myData}
        renderItem={recentView_renderItem}
        keyExtractor={({ item }) => console.log(item)}
      />

      {/* Contact Access Button */}
      <MyButton
        onPress={handleClick}
        title="Camera"
        containerStyle={Styles.statusButton}
        colors={[MyColor.GREEN, MyColor.GREEN]}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
