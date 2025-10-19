

export default function Calculate (expression, lastPressed) {
  try {
    let result = expression;

    result = result.replace(/×/g, '*').replace(/÷/g, '/');

    switch (lastPressed) {
      // Limpar tudo
      case 'AC':
        return '0';

      // Apagar último dígito
     case 'DEL':
        return result.length > 1 ? result.slice(0, -1) : '0';
    case '√':
      return String(Math.sqrt(eval(result)));
    case 'x²':
      return String(Math.pow(eval(result), 2));
    case 'sin':
      return String(Math.sin(toRadians(eval(result))));
    case 'cos':
      return String(Math.cos(toRadians(eval(result))));
    case 'tan':
      return String(Math.tan(toRadians(eval(result))));
    case 'π':
      return expression === '0' ? String(Math.PI) : expression + String(Math.PI);
    case '%':
      return String(eval(result) / 100);
    case '=':
      return String(eval(result));

      // Igual: calcula a expressão
      case '=':
        return String(eval(result));

      default:
        // Para números e operadores
        if (expression === '0') {
          return lastPressed; 
        } else {
          return expression + lastPressed; 
        }
    }
  } catch (error) {
    return 'Erro';
  }
}

// Função auxiliar para converter graus em radianos
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}
