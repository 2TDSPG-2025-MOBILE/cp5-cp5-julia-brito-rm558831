import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Display from '../components/Display';
import ButtonGrid from '../components/ButtonGrid';
import Calculate from '../utils/calculations';
import HistoryList from '../components/HistoryList';

export default function CalculatorScreen() {

  // Estado que armazena a expressão atual digitada pelo usuário
  const [expression, setExpression] = useState('');
  // Estado que armazena o resultado da expressão
  const [result, setResult] = useState('');
  // Estado que armazena os últimos 5 cálculos para o histórico
  const [history, setHistory] = useState([]);
  // Estado que controla se o menu de histórico está visível
  const [historyVisible, setHistoryVisible] = useState(false);
  // Função para limpar o histórico de cálculos
  const clearHistory = () => setHistory([]);

  // Função que lida com a ação de apertar qualquer botão da calculadora
  const handlePress = (value) => {
    if (value === 'AC') {
      setExpression('');
      setResult('');
    } else if (value === 'DEL') {
      setExpression(expression.slice(0, -1));
    } else if (value === '=') {
      const newResult = Calculate(expression || '0', value);
      setResult(newResult);

      // Atualiza histórico apenas se não for erro
      if (newResult !== 'Erro' && newResult !== 'Erro: divisão por zero') {
        const newHistory = [`${expression} = ${newResult}`, ...history];
        setHistory(newHistory.slice(0, 5)); // mantém apenas os 5 últimos
      }
    } else {
    // Atualiza expressão com o valor pressionado
      const newExpression = Calculate(expression || '0', value);
      setExpression(newExpression);
      setResult('');
    }
  };

  return (
    <View style={styles.container}>
       {/* Display */}
      <View style={styles.displayContainer}>
          {/* Botão de histórico*/}
        <TouchableOpacity
          style={styles.historyButtonContainer}
          onPress={() => setHistoryVisible(true)}>
          <Text style={styles.historyButton}>≡</Text>
        </TouchableOpacity>
        <Display expression={expression} result={result} />
      </View>

      {/* Botões */}
      <View style={styles.buttonsContainer}>
        <ButtonGrid onPress={handlePress} />
      </View>

      {/* Modal do histórico */}
      <HistoryList
        visible={historyVisible}
        onClose={() => setHistoryVisible(false)}
        history={history}
        clearHistory={clearHistory}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  historyButtonContainer: {
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 8,
  },
  historyButton: {
    fontSize: 28,
    color: '#fff',
  },
  displayContainer: {
    flex: 0.3,
    justifyContent: 'center',
     position: 'relative', 
  },
  buttonsContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
});
