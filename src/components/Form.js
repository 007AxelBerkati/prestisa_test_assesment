import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';

const Form = ({}) => {
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <CustomInput />
      <Text style={styles.label}>Enter Content:</Text>
      <CustomInput />
      {/* <TextInput style={styles.input} value={content} onChangeText={() => {}} /> */}
      <CustomButton title={'Save'} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
