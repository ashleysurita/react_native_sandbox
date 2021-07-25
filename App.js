import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import Cat from "./components/Cat";

const wrapperStyle = ``;

const App = () => {
  return (
    <ScrollView
      style={{
        padding: 50,
      }}
    >
      <Cat name="Maru" />
      <Cat name="Grumpy" />
      <Cat name="Muffin" />
      {/* <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      /> */}
    </ScrollView>
  );
};

export default App;
