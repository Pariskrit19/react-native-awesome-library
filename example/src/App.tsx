import * as React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Table } from 'react-native-awesome-library';

export default function App() {
  const safeareastyle = {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  };

  return (
    <SafeAreaView style={safeareastyle}>
      <View style={styles.container}>
        <Table />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
