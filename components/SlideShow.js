import React, { Component } from "react";
import {
  View,
  Image,
  StatusBar,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text
} from "react-native";
import Swiper from "react-native-swiper";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    height: "92%",
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffdb5c"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  image: {
    width: width * 0.9,
  }
});

const SlideShow = props => {
  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      dot={
        <View
          style={{
            borderWidth: 1,
            borderColor: "#ffdb5c",
            width: 10,
            height: 10,
            borderRadius: 5,
            marginLeft: 5,
            marginRight: 5
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: "#ffdb5c",
            width: 14,
            height: 14,
            borderRadius: 8,
            marginLeft: 5,
            marginRight: 5
          }}
        />
      }
      paginationStyle={{
        bottom: "3%"
      }}
    >
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require("../img/aplicar.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require("../img/explorar.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require("../img/conectar.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require("../img/modelar.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require("../img/integrar.png")}
          resizeMode="contain"
        />
      </View>
    </Swiper>
  );
};

export default SlideShow;
