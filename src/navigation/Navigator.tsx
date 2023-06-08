import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import type { HeaderButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";

import LoginScreen from "../screens/LoginScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import StarshipDetailsScreen from "../screens/StarshipDetailsScreen";

import { Routes } from "./Routes";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Routes.STARSHIP_FEED_SCREEN}
      >
        <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
        <Stack.Screen
          name={Routes.STARSHIP_FEED_SCREEN}
          component={StarshipFeedScreen}
          options={{
            headerShown: true,
            headerTitle: "Starhships",
          }}
        />
        <Stack.Screen
          name={Routes.STARSHIP_DETAIL_SCREEN}
          component={StarshipDetailsScreen}
          options={{
            headerShown: true,
            presentation: "modal",
            animation: "slide_from_bottom",
            headerBackVisible: false,
            headerRight: ModalCloseButton,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ModalCloseButton = () => {
  const navigation = useNavigation();
  return (
    <Button
      icon="close"
      mode="text"
      onPress={() => {
        navigation.goBack();
      }}
    >
      Fermer
    </Button>
  );
};
