import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { Routes } from "../navigation/Routes";
import { useImage } from "../hooks/UseImage";

interface StarshipFeedItemProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

const StarshipFeedItem = (props: StarshipFeedItemProps) => {
  const { name, model, manufacturer, cost_in_credits } = props;
  const image = useImage(name);

  const navigation = useNavigation();

  return (
    <Card
      mode="contained"
      onPress={() =>
        navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, { props })
      }
    >
      <Card.Cover source={image} />
      <Card.Title title={name} subtitle={model} />
      <Card.Content>
        <Text variant="bodyMedium">{manufacturer}</Text>
        <Text variant="bodyMedium">{cost_in_credits}</Text>
      </Card.Content>
    </Card>
  );
};

export default StarshipFeedItem;

const styles = StyleSheet.create({});
