
# CP5 - Calculadora Científica

## Descrição
A *SmatCalc* é um projeto de **calculadora científica** desenvolvida em **React Native**, com interface moderna e funcionalidades avançadas.  
Ela permite realizar **operações básicas e científicas**, acompanhar o **histórico dos últimos cálculos** e possui um layout responsivo e agradável.

O projeto segue **boas práticas de desenvolvimento**, incluindo:
- Componentização clara (`Display`, `Button`, `ButtonGrid`, `CalculatorScreen`, `HistoryList`)  
- Nomenclatura descritiva de variáveis e funções  
- Comentários explicativos  
- Tratamento de erros (como divisão por zero)  

---
## Funcionalidades

### Operações básicas
- Adição (`+`), subtração (`-`), multiplicação (`×`), divisão (`÷`)  
- Apagar último dígito (`DEL`)  
- Limpar toda a expressão (`AC`)  
- Porcentagem (`%`) com cálculo correto em expressões (ex: `12 + 15%`)  

### Operações científicas
- Raiz quadrada (`√`)  
- Quadrado (`x²`)  
- Seno (`sin`), cosseno (`cos`), tangente (`tan`)  
- Constante π (`π`)  

### Histórico de cálculos
- Menu lateral acessível pelo botão **≡**  
- Armazena os últimos 5 cálculos  
- Possibilidade de limpar o histórico  


## Estrutura do Projeto

```
SmartCalc/
├── App.js
├── src/
│   ├── components/
│   │   ├── Button.js         
│   │   ├── ButtonGrid.js          
│   │   ├── Display.js     
│   │   └── HistoryList.js     
│   ├── screens/
│   │   └── CalculatorScreen.js 
│   └── utils/
│       └── calculations.js    
└── README.md
```

---

## Como usar

1. Digite números e operadores na tela.  
2. Pressione `=` para calcular a expressão.  
3. Pressione `AC` para limpar tudo.  
4. Pressione `DEL` para apagar o último dígito.  
5. Pressione `≡` para abrir o histórico lateral.  
6. Use funções científicas clicando nos botões correspondentes.  
7. Porcentagem (`%`) é calculada corretamente em expressões, incluindo cálculos parciais.  

---

## Autor
Desenvolvido por **Julia Brito** **RM 558831*

---

## Screenshots
> 