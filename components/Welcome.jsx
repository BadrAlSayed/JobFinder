import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { icons } from "../constants";

const Welcome = ({ searchTerm, setSearchTerm }) => {
  const router = useRouter();
  const jobTypes = ["Full Time", "Part Time", "Contractor"];
  const [activeJobType, setActiveJobType] = useState("Full Time");
  return (
    <View>
      <View className="w-full">
        <Text className="text-2xl ">Welcome </Text>
        <Text className="text-3xl font-bold">Find your perfect job</Text>
      </View>

      <View className="justify-center items-center flex-row mt-5 h-12">
        <View className="flex-1 bg-[#FFF] mr-3 h-full">
          <TextInput
            placeholder="What are you looking for"
            className="w-full h-full px-4 "
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
        <TouchableOpacity
          className="bg-tertiary rounded-2xl w-12 h-full justify-center items-center"
          onPress={() => {
            if (searchTerm) router.push(`/search/${searchTerm}`);
          }}
        >
          <Image
            source={icons.search}
            className="w-6 h-6"
            style={{ tintColor: "#fff" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View className="w-full mt-5 ">
        <FlatList
          data={jobTypes}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="rounded-2xl border p-2"
              style={{
                borderColor: activeJobType === item ? "#444262" : "#C1C0C8",
              }}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text
                style={{
                  color: activeJobType === item ? "#444262" : "#C1C0C8",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
