import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ShowScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={{ backgroundColor: 'white', flex: 1, padding: 16 }}>
      <Text>{item.id}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
