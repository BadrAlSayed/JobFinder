import React from "react";
import { View, Text, Image } from "react-native";
import { icons } from "../constants";
import { checkImageURL } from "../utils";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View className="justify-center items-center">
      <View className="w-[80] h-[80] justify-center items-center bg-[#FFF] border-2xl">
        <Image
          source={{ uri: companyLogo }}
          alt="logo"
          className="w-[80%] h-[80%]"
        />
      </View>
      <View className="mt-5">
        <Text className="text-xl">{jobTitle}</Text>
      </View>
      <View className="mt-3 flex-row justify-center items-center">
        <Text className="text-[#312651] text-xs">{companyName} /</Text>
        <View className="flex-row justify-center items-center ">
          <Image
            className="w-[14] h-[14]"
            source={icons.location}
            resizeMode="contain"
            alt="location"
            style={{ tintColor: "#83829A" }}
          />
          <Text className="text-[#312651] text-[#83829A] text-xs">
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
