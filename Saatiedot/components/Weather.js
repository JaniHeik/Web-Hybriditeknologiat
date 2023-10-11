import { StyleSheet, View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL
}

export default function Weather(props) {
    const [temp, setTemp] = useState(0)
    const [description, setDescription] = useState('')
    const [icon, setIcon] = useState('')

    useEffect(() => {
        const url = api.url +
        'lat=' + props.latitude +
        '&lon=' + props.longitude +
        '&units=metric' +
        '&appid=' + api.key

        fetch(url)
        .then(res => res.json())
        .then((json) => {
            console.log(json)
            setTemp(json.main.temp)
            setDescription(json.weather[0].description)
            setIcon(api.icons + json.weather[0].icon + '@2x.png')
        })
        .catch((error) => {
            setDescription("Error retrieving weather information.")
            console.log(error)
        })
    }, [])

    return (
        <View>
            <Text style={styles.temp}>Temperature: {temp}&#x2103;</Text>
            { icon &&
            <Image source={{uri: icon}} style={styles.image} />
            }
        <Text style={styles.description}> {description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    temp: {
        fontSize: 20,
        marginTop: 35,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    image: {
        width: 150,
        height: 150,
    }
});
