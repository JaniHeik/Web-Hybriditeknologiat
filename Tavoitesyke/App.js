import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [heartRateLimits, setHeartRateLimits] = useState('');

  useEffect(() => {
    calculateHeartRateLimits();
  }, [age]);

  const calculateHeartRateLimits = () => {
    if (age !== '') {
      const ageValue = parseInt(age);
      const lower = Math.round((220 - ageValue) * 0.65);
      const upper = Math.round((220 - ageValue) * 0.85);

      setHeartRateLimits(`${lower} - ${upper}`);
    } else {
      setHeartRateLimits('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="decimal-pad"
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.label}>Hr Limits</Text>
      {heartRateLimits !== '' && (
        <Text style={styles.result}>{heartRateLimits}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  }
});