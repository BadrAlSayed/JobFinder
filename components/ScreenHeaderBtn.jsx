import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity, Image } from "react-native";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity
      className="w-10 h-10 bg-white rounded-md justify-center items-center"
      onPress={handlePress}
    >
      <Image
        source={iconUrl}
        resizeMode="cover"
        className={`w-${dimension} h-${dimension} rounded-xl`}
        // className="w-6 h-6 rounded bg-red-500"
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
