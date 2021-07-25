import React from "react";
import { Text } from "react-native";

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
};

const Cat = () => {
  const name = "Maru";
  return (
    <Text>Hello, I am your cat {getFullName("Rum", "Tum", "Tiger")}!</Text>
  );
};

export default Cat;
