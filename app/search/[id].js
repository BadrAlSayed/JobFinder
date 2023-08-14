import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";
import axios from "axios";

import { ScreenHeaderBtn, NearbyJobCard } from "../../components";
import { icons } from "../../constants";

const JobSearch = () => {
  const params = useSearchParams();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          "X-RapidAPI-Key":
            "77051d4392msh3c5f059b1aeb913p1ad1b1jsn2eb660e20490",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: {
          query: params.id,
          page: page.toString(),
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === "right") {
      setPage(page + 1);
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFC" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="6"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <NearbyJobCard
            job={item}
            handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ padding: 16, rowGap: 16 }}
        ListHeaderComponent={() => (
          <>
            <View className="w-full">
              <Text className="text-[#312651] font-bold text-2xl">
                {params.id}
              </Text>
              <Text className="text-[#312651] mt-2">Job Opportunities</Text>
            </View>
            <View className="mt-4">
              {searchLoader ? (
                <ActivityIndicator size="large" color="#312651" />
              ) : (
                searchError && <Text>Oops something went wrong</Text>
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View className="flex-row justify-center items-center mt-2">
            <TouchableOpacity
              className="w-[30] h-[30] rounded bg-[#FF7754] justify-center items-center"
              onPress={() => handlePagination("left")}
            >
              <Image
                source={icons.chevronLeft}
                className="w-[60%] h-[60%]"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View className="w-[30] h-[30] rounded-xl bg-[#F3F4F8] justify-center items-center">
              <Text className="text-[#312651] font-bold">{page}</Text>
            </View>
            <TouchableOpacity
              className="w-[30] h-[30] rounded bg-[#FF7754] justify-center items-center"
              onPress={() => handlePagination("right")}
            >
              <Image
                source={icons.chevronRight}
                className="w-[60%] h-[60%]"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
