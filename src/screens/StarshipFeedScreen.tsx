import React, { useEffect } from "react";
import { StyleSheet, StatusBar, View, FlatList, Image, ScrollView, RefreshControl } from "react-native";
import { Text } from 'react-native-paper';

import { default as data } from "../../api/data.json";
import StarshipFeedItem from "../components/StarshipFeedItem";
import ScreenContainer from "../components/ScreenContainer";
import { useStarships } from "../hooks/UseStarships";
import { Placeholder, PlaceholderMedia, PlaceholderLine, ShineOverlay  } from "rn-placeholder";

export const StarshipFeedScreen = () => {

    const starships = useStarships();

    useEffect(() => {
        console.log(starships.status)
    }, [starships])
    
    if (starships.status === 'loading') {
        return (
                <ScrollView
                    contentContainerStyle={styles.container}
                >
                    <LoadingItem />
                    <LoadingItem />
                    <LoadingItem />
                </ScrollView>
        )
    }

    if (starships.status === 'error') {
        return (
            <ScreenContainer additionalStyle={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={{uri: 'https://media.tenor.com/72JAs1HY9bkAAAAd/space-ship-crash.gif'}} style={{width: '100%', height: 200, resizeMode: 'contain'}}/>
                <Text variant="headlineMedium"> Error </Text>
            </ScreenContainer>
        )
    }

    return (
        <ScreenContainer additionalStyle={styles.container}>
            <FlatList 
                data={data.results}
                renderItem={({item, index}) => <StarshipFeedItem key={item.name + '-' + index} item={item} />}
                keyExtractor={(item, index) => item.name + '-' + index}
                ItemSeparatorComponent={() => <View style={{height: 10}}/>}
                refreshControl={ 
                    <RefreshControl
                        refreshing={starships.isFetching}
                        onRefresh={starships.refetch}
                    />
                }
            />
        </ScreenContainer>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0, // only for Android to avoid status bar overlap
    padding: 10
  }
});

function LoadingItem() {
    return <Placeholder
        Animation={ShineOverlay}
    >
        <PlaceholderMedia style={{ width: '100%', height: 200, marginBottom: 5 }} />
        <PlaceholderLine width={80} />
        <PlaceholderLine width={50} />
        <PlaceholderLine width={50} />
        <PlaceholderLine width={50} />
    </Placeholder>;
}
