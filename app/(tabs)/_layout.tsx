import { Feather, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import colors from "@/constants/colors";
import { View } from "react-native";
import {
  GameBold,
  GameOutline,
  HomeBold,
  HomeOutline,
  ProfileBold,
  ProfileOutline,
  RewardBold,
  RewardOutline,
} from "@/assets/icons";

const TabsLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.gray,
          headerTitle: "",
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color }) =>
              focused ? (
                <HomeBold size={34} color={color} />
              ) : (
                <HomeOutline size={34} color={color} />
              ),
          }}
        />
        <Tabs.Screen
          name="game"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color }) =>
              focused ? (
                <GameBold size={34} color={color} />
              ) : (
                <GameOutline size={34} color={color} />
              ),
          }}
        />
        <Tabs.Screen
          name="rank"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color }) =>
              focused ? (
                <RewardBold size={34} color={color} />
              ) : (
                <RewardOutline size={34} color={color} />
              ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color }) =>
              focused ? (
                <ProfileBold size={34} color={color} />
              ) : (
                <ProfileOutline size={34} color={color} />
              ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};
export default TabsLayout;
