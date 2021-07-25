import React, { useState } from "react";
import { Text, Image, View, Button } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={{ width: 150, height: 150 }}
      />
      <Button
        onPress={() => setIsHungry(!isHungry)}
        title={isHungry ? "Pour me some milk please!" : "Thank you!"}
      />
    </View>
  );
};

export default Cat;
