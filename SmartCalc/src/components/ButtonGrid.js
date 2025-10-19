import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

export default function ButtonGrid({ onPress }) {
  // Exemplo simples de grade com 4 botões
  const buttons = ['1', '2', '3', '+'];

  return (
    <View style={styles.container}>
      {buttons.map((label) => (
        <Button key={label} label={label} onPress={() => onPress(label)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 10,
  },
});
