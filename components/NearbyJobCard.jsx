import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../utils/index";
const PopularJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      className="flex-1 flex-row items-center justify-start p-6 border rounded-xl border-[#FFF]"
      onPress={() => handleNavigate()}
    >
      <TouchableOpacity className="w-50 h-50 justify-center bg-white">
        <Image
          source={{ uri: job.employer_logo }}
          alt="logo"
          resizeMode="contain"
          className="w-7 h-7"
        />
      </TouchableOpacity>

      <View className="m-2">
        <Text className="text-primary text-l-bold" numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text className="text-[#B3AEC6] text-xs">
          {job.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
