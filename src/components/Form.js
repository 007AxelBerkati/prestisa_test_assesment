import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useForm } from '../hooks/useForm';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import { getData, storeData } from '../plugins';
import uuid from 'react-native-uuid';

const Form = ({ title, content, type, navigation, id }) => {
  const [form, setForm] = useForm({
    title: title ? title : '',
    content: content ? content : '',
    id: id ? id : '',
  });

  const addData = async (newData) => {
    try {
      const existingData = await getData('data').then((res) => res || []);
      const updateData = [...existingData, { ...newData, id: uuid.v4() }];
      await storeData('data', updateData);
      navigation.replace('HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };

  const editData = async (newData) => {
    try {
      const existingData = await getData('data').then((res) => res || []);
      const updateData = existingData.map((item) => {
        if (item.id === newData.id) {
          return newData;
        }
        return item;
      });
      await storeData('data', updateData);
      navigation.replace('HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = () => {
    if (type === 'create') {
      addData(form);
    } else if (type === 'edit') {
      editData(form);
    }
  };
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <CustomInput
        value={form.title}
        placeholder={'Enter Title'}
        onChangeText={(text) => {
          setForm('title', text);
        }}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <CustomInput
        value={form.content}
        placeholder={'Enter Content'}
        onChangeText={(text) => {
          setForm('content', text);
        }}
      />
      <CustomButton
        title={type === 'create' ? 'Add Data' : 'Update Data'}
        onPress={onSubmit}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});
