

export default function Calculate (expression, lastPressed) {
  try {
    let result = expression;

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
      return expression + '%';
      // Igual: calcula a expressão
    case '=':
        try {
            // Substitui × e ÷
          let expCalc = expression.replace(/×/g, '*').replace(/÷/g, '/');
          
          // Substitui porcentagem considerando o número anterior
          expCalc = expCalc.replace(/(\d+)([\+\-\*\/])(\d+)%/g, '($1$2($1*$3*0.01))');

          // Caso seja apenas um número com %, sem operador
          expCalc = expCalc.replace(/^(\d+)%$/, '($1*0.01)');

          return String(eval(expCalc));
        } catch {
          return 'Erro';
  }

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
