import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ label, onPress, type = 'number' }) {
  let buttonStyle;

  if (label === 'DEL') {
    buttonStyle = styles.deleteButton; 
  } else if (type === 'operator') {
    buttonStyle = styles.operatorButton; 
  } else if (type === 'function') {
    buttonStyle = styles.functionButton; 
  } else {
    buttonStyle = styles.numberButton;
  }

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={() => onPress(label)}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
    minHeight: 70,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  numberButton: {
    backgroundColor: '#2e2e2e',
  },
  operatorButton: {
    backgroundColor: '#9b59b6', 
  },
  functionButton: {
    backgroundColor: '#737373ff'
  },
  deleteButton: {
    backgroundColor: '#472057ff', 
  },
  text: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
  },
});
