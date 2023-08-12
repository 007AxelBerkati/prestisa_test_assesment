import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CustomList from '../components/CustomList';
import { getData, removeData, storeData } from '../plugins';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData('data').then((res) => {
      setData(res);
    });
  }, []);

  const onPress = async (item) => {
    Alert.alert(
      'Delete',
      'Do you want to delete just this data or all data?',
      [
        {
          text: 'Delete All Data',
          style: 'cancel',
          onPress: async () => {
            await removeData('data');
            setData([]);
          },
        },
        {
          text: 'Delete Just This Data',
          onPress: async () => {
            const newData = data.filter((data) => data.id !== item.id);
            setData(newData);
            await storeData('data', newData);
          },
        },
      ],
      { cancelable: false }
    );
  };

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
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center', marginTop: 16 }}>
            <Text style={{ fontSize: 16 }}>No Data</Text>
          </View>
        )}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={{ marginBottom: 16 }}>
              <CustomList
                item={item}
                navigation={navigation}
                onPress={() => {
                  onPress(item);
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
