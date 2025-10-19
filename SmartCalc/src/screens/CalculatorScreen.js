import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CalculatorScreen() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  return (
    <View style={styles.container}>
      <Text>Calculadora funcionando!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
