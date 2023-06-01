import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <View style={[styles.header]}>
      <Text variant="headlineMedium" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'purple',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: '700'
  },
});