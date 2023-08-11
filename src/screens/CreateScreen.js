import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Form from '../components/Form';

const CreateScreen = () => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, padding: 16 }}>
      <Form />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
