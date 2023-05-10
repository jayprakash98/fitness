import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import WorkOutScreen from "./screens/WorkOutScreen";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: { color: "#7d99e1", fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="HOME 9:18"
          component={HomeScreen}
          options={{ headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="WorkOut"
          component={WorkOutScreen}
          options={{ headerTitleAlign: "center", headerTintColor: "#7d99e1" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
