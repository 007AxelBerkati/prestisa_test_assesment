import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import CustomList from '../components/CustomList';

const HomeScreen = ({ navigation }) => {
  const data = [
    {
      id: 1,
      name: 'A',
      age: 20,
    },
    {
      id: 2,
      name: 'B',
      age: 21,
    },
    {
      id: 3,
      name: 'C',
      age: 22,
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <CustomList item={item} navigation={navigation} />;
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
