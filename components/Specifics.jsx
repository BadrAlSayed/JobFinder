import React from "react";
import { View, Text } from "react-native";

const Specifics = ({ title, data }) => {
  return (
    <View className="mt-5 bg-[#FFF] rounded-xl p-3">
      <Text className="text-2xl text-[#312651] font-bold">{title}:</Text>
      <View>
        {data.map((item, index) => (
          <View key={index} className="flex-row mt-2">
            <View className="w-[6] h-[6] rounded-full mt-[6] bg-[#C1C0C8]"></View>
            <Text className="text-[14px] ml-1 text-[#83829A]">{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
