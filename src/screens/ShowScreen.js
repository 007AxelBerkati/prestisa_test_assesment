import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardDescription from '../components/CardDescription';

const ShowScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={{ backgroundColor: 'white', flex: 1, padding: 16 }}>
      <CardDescription title={item.title} content={item.content} />
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
