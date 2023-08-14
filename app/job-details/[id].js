import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useState, useCallback } from "react";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import useFetch from "../../hook/useFetch";
import { icons } from "../../constants";
import { isLoading } from "expo-font";
const tabs = ["About", "Qualifications", "Responsibilities"];
const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });
  // const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  // const onRefresh = () => {};
  const displayTabContent = () => {
    switch (activeTab) {
      case "About":
        return <JobAbout data={data[0].job_description} />;
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            data={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            data={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
      default:
        break;
    }
  };

  return (
    <SafeAreaView className="bg-lightwhite">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerTitle: "",
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension={6}
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension={6} />
          ),
        }}
      />
      <View className="flex h-full">
        <ScrollView
          showsVerticalScrollIndicator={false}
          // refreshControl={
          //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          // }
        >
          {isLoading ? (
            <ActivityIndicator size="large" className="mt-8" />
          ) : error ? (
            <Text>Error</Text>
          ) : data.length == 0 ? (
            <Text>No Data</Text>
          ) : (
            <View className="p-4 pb-5">
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        <JobFooter
          className=""
          url={
            data[0]?.job_google_link ??
            "https://carrers.google.com/jobs/results"
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default JobDetails;
