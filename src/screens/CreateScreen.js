import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from '../components/Form';

const CreateScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, padding: 16 }}>
      <Form type="create" navigation={navigation} />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
