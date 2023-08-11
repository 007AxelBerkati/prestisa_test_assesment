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
    <View
      style={{
        paddingHorizontal: 16,
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 16,
      }}
    >
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={{ marginBottom: 16 }}>
              <CustomList item={item} navigation={navigation} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
