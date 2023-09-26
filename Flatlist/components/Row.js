import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Row({person}) {
    return (
        <Text style={styles.row}>{person.lastname}, {person.firstname}</Text>
    )
}

const styles = StyleSheet.create({
    row: {
        marginTop: 8,
        marginBottom: 8
    },
});