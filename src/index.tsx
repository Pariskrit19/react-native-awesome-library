import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

export const Table = () => {
  return (
    <View style={{ ...styles.mainContainer }}>
      <View style={styles.dropdownStyles}>
        <Text style={{ ...styles.dropdownText }}>Awesome Library</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  dropdownStyles: {
    backgroundColor: 'black',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 30,
    fontWeight: '900',
    width: '65%',
    color: 'white',
  },
});
