import { StyleSheet, Text, View } from 'react-native';
import Position from './components/Position';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current Weather App</Text>
      <Position />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#890099',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 35,
    textAlign: 'left',
    marginBottom: 20,
    fontWeight: 'bold',
  }
});
