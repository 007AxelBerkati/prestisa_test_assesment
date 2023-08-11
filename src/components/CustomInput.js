import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';

const CustomInput = ({ value }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={() => {}}
      placeholder="Enter Title"
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
    paddingVertical: 12,
  },
});
