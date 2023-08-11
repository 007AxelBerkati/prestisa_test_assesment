import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CustomList = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ShowScreen', { item })}
    >
      <View style={styles.row}>
        <Text style={styles.title}>
          {item.name} - {item.id} - {item.age}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Feather style={styles.icon} name="trash" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CustomList;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
