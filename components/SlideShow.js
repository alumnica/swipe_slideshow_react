import React, { useState, useEffect } from "react";
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


const SlideShow = props => {
  const [ratio, setRatio] = useState(1)

  useEffect(() => {
    let info = Image.resolveAssetSource(require("../img/explorar.png"))
    setRatio(info.width/info.height)
    console.log(info.height/info.width)
  },[]);
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
      width: width*0.85 ,
      height: (width*0.85)/ratio,
      marginLeft: "7.5%",
      marginRight: "7.55%",
    }
  });
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
      <View style={styles.slide}>
        <ScrollView>
          <Text style={{ padding: "5%", fontSize: 30, fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            elit quam. Donec non volutpat lorem. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Suspendisse
            tincidunt ex ac risus tincidunt, id tincidunt justo fringilla. Nulla
            sit amet ornare enim. Phasellus iaculis nibh quis vulputate
            molestie. Cras in sapien at erat ornare pellentesque. Mauris congue
            diam in placerat hendrerit. Cras non feugiat ante, dapibus congue
            mauris. Nam facilisis tellus ac vehicula volutpat. Praesent sapien
            sem, suscipit ut quam in, molestie tincidunt purus. Vestibulum vel
            felis orci.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.slide}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between"
          }}
        >
          <Text style={{ padding: "5%", fontSize: 30, fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            elit quam. Donec non volutpat lorem. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.
          </Text>
          <Image
            style={styles.image}
            source={require("../img/explorar.png")}
            resizeMode="cover"
          />
          <Text style={{ padding: "5%", fontSize: 30, fontWeight: "bold" }}>
            Suspendisse tincidunt ex ac risus tincidunt, id tincidunt justo
            fringilla. Nulla sit amet ornare enim. Phasellus iaculis nibh quis
            vulputate molestie. Cras in sapien at erat ornare pellentesque.
            Mauris congue diam in placerat hendrerit. Cras non feugiat ante,
            dapibus congue mauris. Nam facilisis tellus ac vehicula volutpat.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.slide}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between"
          }}
        >
          <Image
            style={styles.image}
            source={require("../img/explorar.png")}
            resizeMode="contain"
          />
          <Image
            style={styles.image}
            source={require("../img/explorar.png")}
            resizeMode="contain"
          />
          <Image
            style={styles.image}
            source={require("../img/explorar.png")}
            resizeMode="contain"
          />
          <Image
            style={styles.image}
            source={require("../img/explorar.png")}
            resizeMode="contain"
          />
          <Image
            style={styles.image}
            source={require("../img/explorar.png")}
            resizeMode="contain"
          />
        </ScrollView>
      </View>
    </Swiper>
  );
};

export default SlideShow;
