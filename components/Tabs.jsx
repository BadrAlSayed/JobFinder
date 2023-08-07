import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View className="mt-4">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        data={tabs}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="rounded-2xl px-3 py-1 ml-2"
            onPress={() => setActiveTab(item)}
            style={{
              backgroundColor: activeTab === item ? "#312651" : "#F3F4F8",
            }}
          >
            <Text
              style={{
                color: activeTab === item ? "#C3BFCC" : "#AAA9B8",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Tabs;
