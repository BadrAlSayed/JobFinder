import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const PopularJobCard = ({ item, selectedJob, handlePress }) => {
  return (
    <TouchableOpacity
      className="w-[250] justify-between p-6 border rounded-xl"
      style={{
        borderColor: selectedJob === item ? "#312651" : "#FFF",
      }}
      onPress={() => handlePress(item)}
    >
      <TouchableOpacity
        className="w-50 h-50 justify-center "
        style={{
          borderColor: selectedJob === item ? "#FFF" : "#F3F4F8",
        }}
      >
        <Image
          source={{ uri: item.employer_logo }}
          resizeMode="contain"
          className="w-7 h-7"
        />
      </TouchableOpacity>
      <Text className="text-[#B3AEC6] mt-2" numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View className="mt-4">
        <Text numberOfLines={1}>{item.job_title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
