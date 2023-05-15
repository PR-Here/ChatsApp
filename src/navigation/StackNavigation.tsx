import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashBoard from "../dashboard/Dashboard";
import Splash from "../screen/splash/Splash";
import { Login, OtpVerify } from "../screen";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Dashboard" component={DashBoard} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OtpVerify" component={OtpVerify} />
    </Stack.Navigator>
  );
}
