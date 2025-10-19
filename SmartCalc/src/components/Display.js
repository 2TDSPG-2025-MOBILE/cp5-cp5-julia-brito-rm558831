import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente que exibe a expressão e o resultado
export default function Display({ expression = '', result = '' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.expression}>{expression}</Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'flex-end',
    backgroundColor: '#1e1e1e',
  },
  expression: {
    fontSize: 28,
    color: '#aaa',
  },
  result: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
});
