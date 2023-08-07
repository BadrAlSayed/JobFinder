import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";

const Footer = ({ url }) => {
  return (
    <View className="py-4 bg-[#FFF]">
      <TouchableOpacity
        className="flex items-center justify-center bg-[#FE7654] mx-4 rounded-2xl p-4"
        onPress={() => Linking.openURL(url)}
      >
        <Text className="font-bold text-[#F3F4F8]">Apply to job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
