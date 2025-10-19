import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente para exibir resultados ou fórmulas
export default function Calculation({ formula = '' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formula}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e1e1e',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});
