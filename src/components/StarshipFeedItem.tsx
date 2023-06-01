import { StyleSheet } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper';

const StarshipFeedItem = ({item}: any) => {
    

    return (
        <Card mode="contained">
            <Card.Title title={item.name} subtitle={item.model} />
            <Card.Content>
                <Text variant='bodyMedium'>{item.crew}</Text>
                <Text variant='bodyMedium'>{item.hyperdrive_rating}</Text>
                <Text variant='bodyMedium'>{item.cost_in_credits}</Text>
            </Card.Content>
            <Card.Cover source={require(`../../assets/starships/${item.model.replace(' ', '')}.jpg`)}/>
        </Card>
    )
}

export default StarshipFeedItem

const styles = StyleSheet.create({})