import React from "react";
import { Text, Image, View } from "react-native";

const Cat = (props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}</Text>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default Cat;
