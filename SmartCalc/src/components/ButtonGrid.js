
import { View, StyleSheet } from 'react-native';
import Button from './Button';

const BUTTON_ROWS = [
  [
    { label: 'AC', type: 'operator' },
    { label: '√', type: 'operator' },
    { label: '%', type: 'operator' },
    { label: '÷', type: 'operator' },
  ],
  [
    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '×', type: 'operator' },
  ],
  [
    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '-', type: 'operator' },
  ],
  [
    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '+', type: 'operator' },
  ],
  [
    { label: '0', type: 'number' },
    { label: '.', type: 'number' },
      { label: 'DEL', type: 'operator' },
    { label: '=', type: 'operator' },

  ],
  [
    { label: 'x²', type: 'function' },
    { label: 'sin', type: 'function' },
    { label: 'cos', type: 'function' },
    { label: 'tan', type: 'function' },
    { label: 'π', type: 'function' },
  ],
];

export default function ButtonGrid({ onPress }) {
  return (
    <View style={styles.container}>
       {BUTTON_ROWS.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map(({ label, type }) => (
            <Button key={label} label={label} type={type} onPress={onPress} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});
