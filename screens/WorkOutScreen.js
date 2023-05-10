import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function WorkOutScreen() {
  // basically use this useroute i ma fetching all data whatever i am getting from
  // fitnessCards whatever i have passed on press pops  on pressing it ...
  const route = useRoute();

  return (
    <SafeAreaView>
      <Image
        style={{ width: "100%", height: 170 }}
        source={{ uri: route.params.image }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
