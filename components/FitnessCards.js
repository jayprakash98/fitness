import { Pressable, StyleSheet, Text, View, Image, item } from "react-native";
import React from "react";
import fitness from "../data/Fitness";
import { useNavigation } from "@react-navigation/native";

export default function Fitnesscards() {
  const FitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() =>
            navigation.navigate("WorkOut", {
              image: item.image,
              exersises: item.exersises,
              id: item.id,
            })
          }
          style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
          key={key}
        >
          <Image
            style={{
              width: "95%",
              height: 120,
              borderWidth: 8,
              borderColor: "#7d99e1",
              borderRadius: 30,
            }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              left: 20,
              top: 25,
            }}
          >
            {item.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
