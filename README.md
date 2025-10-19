
# CP5 - Calculadora Científica SMARTCALC

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
## Como acessar

1. Clone o projeto
2. Entre na pasta do projeto
   ```
   cd SmartCalc
   ```
3. Baixe as dependencias
   ```
   npm install
   ```
4. Inicie o projeto com o Expo:
   ```
   npx expo start
   ```
5. Acesse o emulador ou abra no seu celular com o app **Expo Go.**

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
> ![Imagem do WhatsApp de 2025-10-19 à(s) 17 39 19_d2a511b1](https://github.com/user-attachments/assets/4f172a4f-1cc2-47a0-9f66-6e8b8f161361)
> ![Imagem do WhatsApp de 2025-10-19 à(s) 17 39 19_4e1e59c4](https://github.com/user-attachments/assets/c00f0bbd-f083-4bf7-a519-4915528067f8)
> ![Imagem do WhatsApp de 2025-10-19 à(s) 17 39 19_37bf6775](https://github.com/user-attachments/assets/1505236f-bd1a-4696-ae40-fae991f8f727)
> ![Imagem do WhatsApp de 2025-10-19 à(s) 17 39 20_e0494185](https://github.com/user-attachments/assets/02657182-b7b5-40e8-adcb-b51976b9e89d)



