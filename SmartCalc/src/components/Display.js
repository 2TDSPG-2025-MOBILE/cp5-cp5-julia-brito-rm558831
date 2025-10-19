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
    justifyContent: 'center',
    backgroundColor: '#1e1e1e',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  expression: {
    fontSize: 28,
    color: '#aaa',
  },
  result: {
    fontSize: 48,
    color: '#fff',
    fontWeight: '700',
  },
});
