import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import NearbyJobCard from "./NearbyJobCard";
import useFetch from "../hook/useFetch";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });

  return (
    <View className="mt-6">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl text-primary">Nearby Jobs</Text>
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
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
