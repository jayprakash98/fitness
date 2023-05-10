import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Fitnesscards from "../components/FitnessCards";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#7d99e1",
          borderColor: "white",
          height: "25%",
          width: "100%",
          padding: 10,
          borderWidth: 10,
          borderColor: "#eaecf0",
          borderRadius: 30,
        }}
      >
        <Text style={styles.TextStyle}>HOME WORKOUT</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            //   backgroundColor: "white",
          }}
        >
          <View style={{ marginTop: 10 }}>
            <Text style={styles.WithDimColor}>WORKOUTS</Text>
            <Text style={styles.TextStyle}>0</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.WithDimColor}>KCAL</Text>
            <Text style={styles.TextStyle}>0</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.WithDimColor}>MINS</Text>
            <Text style={styles.TextStyle}>0</Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              marginBottom: 5,
              borderRadius: 7,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
        <Fitnesscards />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  TextStyle: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  WithDimColor: {
    textAlign: "center",
    color: "#C9DFD8",
    fontWeight: "bold",
    fontSize: 20,
  },
});
