import { FlatList, View, StyleSheet, Text } from 'react-native';
import {DATA} from './Data';
import Row from './components/Row';

export default function App() {

  return (
    <View style={styles.container}>
      <FlatList
      data = {DATA}
      renderItem = {({item}) => (
        <Row person = {item} />
      )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40
  },
});
