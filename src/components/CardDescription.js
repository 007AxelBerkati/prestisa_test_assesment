import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CardDescription = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default CardDescription;

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    elevation: 2,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  content: {
    marginTop: 8,
    fontSize: 16,
  },
});
