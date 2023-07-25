import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import PopularJobCard from "./PopularJobCard";
import useFetch from "../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });

  return (
    <View className="mt-6">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl text-primary">Popularjobs</Text>
        <TouchableOpacity>
          <Text className="text-gray">Show All</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-3">
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ columnGap: 16 }}
            keyExtractor={(item) => item?.job_id}
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} />}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
