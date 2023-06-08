import type { ReactNode } from "react";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

// Import <Offline /> component

interface ScreenContainerProps {
  title: string;
  optionalStyle?: object;
  children?: ReactNode;
  withSeparatorFooter?: boolean;
}

export const ScreenContainer = ({
  title,
  optionalStyle,
  children,
  withSeparatorFooter = false,
}: ScreenContainerProps) => {
  return (
    <ScrollView
      style={[styles.container, optionalStyle]}
      nestedScrollEnabled={true}
    >
      {/* <Offline /> */}
      {children}
      {withSeparatorFooter && <View style={styles.footer} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 0,
    marginTop: 36,
  },
  footer: {
    paddingBottom: 256,
  },
});
