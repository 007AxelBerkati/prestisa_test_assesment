import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Form from '../components/Form';

const EditScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={{ backgroundColor: 'white', padding: 16, flex: 1 }}>
      <Form
        title={item.title}
        type={'edit'}
        content={item.content}
        id={item.id}
        navigation={navigation}
      />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
