import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Card, Text } from 'react-native-paper';
import { useImage } from '../hooks/UseImage';

const StarshipFeedItem = ({item}: any) => {

    const image = useImage(item.name);

    return (
        <Card mode="contained">
            <Card.Cover source={image}/>
            <Card.Title title={item.name} subtitle={item.model} />
            <Card.Content>
                <Text variant='bodyMedium'>{item.crew}</Text>
                <Text variant='bodyMedium'>{item.hyperdrive_rating}</Text>
                <Text variant='bodyMedium'>{item.cost_in_credits}</Text>
            </Card.Content>
        </Card>
    )
}

export default StarshipFeedItem

const styles = StyleSheet.create({})