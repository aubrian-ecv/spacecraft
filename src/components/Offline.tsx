import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useIsConnected } from "react-native-offline";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export const Offline = () => {
  // Add `useIsConnected()` hook
  const isConnected = useIsConnected();

  return (
    <View>
      <Text>
        {/* Check `isConnected` status and render a message with `ActivityIndicator` */}
        {!isConnected && (
          <>
            <ActivityIndicator animating color={MD2Colors.red800} />
            You are offline, ships will load when you are back online
          </>
        )}
      </Text>
    </View>
  );
};
