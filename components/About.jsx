import React from "react";
import { View, Text } from "react-native";

const About = ({ data }) => {
  return (
    <View className="mt-5 bg-[#FFF] rounded-xl p-3">
      <Text className="text-2xl text-[#312651] font-bold">About this job:</Text>
      <View className="mt-5">
        <Text className="text-[14px] text-[#83829A]">{data}</Text>
      </View>
    </View>
  );
};

export default About;
