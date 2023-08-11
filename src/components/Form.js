import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Form = () => {
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={() => {}} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={() => {}} />
      <Button title="Save Blog Post" onPress={() => {}} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
