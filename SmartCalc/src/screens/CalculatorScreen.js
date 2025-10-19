import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from '../components/Display';
import ButtonGrid from '../components/ButtonGrid';
import Calculate from '../utils/calculations';

export default function CalculatorScreen() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

const handlePress = (value) => {
  if (value === 'AC') {
    setExpression('');
    setResult('');
  } else if (value === 'DEL') {
    setExpression(expression.slice(0, -1));
  } else if (value === '=') {
    const newResult = Calculate(expression || '0', value);
    setResult(newResult);
  } else {
    const newExpression = Calculate(expression || '0', value);
    setExpression(newExpression);
    setResult('');
  }
};

  return (
   <View style={styles.container}>
      {/* Display ocupa 30% da altura */}
      <View style={styles.displayContainer}>
        <Display expression={expression} result={result} />
      </View>

      {/* Botões ocupam 70% da altura */}
      <View style={styles.buttonsContainer}>
        <ButtonGrid onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  displayContainer: {
    flex: 0.3, // 30% da tela
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 0.7, // 70% da tela
    justifyContent: 'center',
  },
});