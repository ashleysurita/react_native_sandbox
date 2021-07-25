import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import Cat from "./components/Cat";

const wrapperStyle = ``;

const App = () => {
  return (
    <ScrollView
      style={{
        padding: 50,
        backgroundColor: "#2c2e40",
        color: "#f5f6f7",
      }}
    >
      <Cat name="Maru" />
      <Cat name="Grumpy" />
      <Cat name="Muffin" />
    </ScrollView>
  );
};

export default App;
