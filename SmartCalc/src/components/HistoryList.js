import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Animated } from 'react-native';

export default function HistoryList({ visible, onClose, history, clearHistory }) {
  // Animação de slide
  const slideAnim = React.useRef(new Animated.Value(-300)).current; // começa fora da tela

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : -300, // entra ou sai da tela
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [visible]);

  return (
    <Animated.View style={[styles.container, { left: slideAnim }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Histórico</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.close}>X</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
        style={styles.list}
      />

      <TouchableOpacity style={styles.clearButton} onPress={clearHistory}>
        <Text style={styles.clearText}>Limpar Histórico</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    bottom: 0,
    width: 300,
    backgroundColor: '#1c1c1c',
    padding: 20,
    zIndex: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  close: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  list: {
    flexGrow: 0,
    marginBottom: 20,
  },
  historyItem: {
    fontSize: 16,
    color: '#ddd',
    paddingVertical: 4,
  },
  clearButton: {
    backgroundColor: '#472057ff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  clearText: {
    color: '#fff',
    fontWeight: '600',
  },
});
