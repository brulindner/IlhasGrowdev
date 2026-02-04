# Desafio: Caixa Eletrônico das Ilhas Growdev

Este desafio se trata da construção de um algoritmo em **JavaScript** para simular a lógica de distribuição de cédulas em um caixa eletrônico. O objetivo principal é entregar o valor solicitado pelo usuário utilizando a **menor quantidade possível de notas**.

## Funcionalidades

- **Entrada de Dados:** Recebe um valor inteiro via prompt.
- **Validação:** Garante que o valor seja numérico e positivo.
- **Lógica Escalável:** O sistema aceita novas cédulas no futuro.
- **Algoritmo de Otimização:** Prioriza as notas de maior valor.
- **Saída Limpa:** Exibe no console apenas as notas entregues.
  
---

## 💻 Explicação da Lógica

### 1. Entrada e Tratamento de Dados

```javascript
let valorSaque = parseInt(prompt("Informe qual valor deseja sacar..."))
```
Como o Prompt retorna uma String, utilizei o parseInt para converter a entrada em um número inteiro.

### 2. Validação de Segurança
```javascript
if (isNaN(valorSaque) || valorSaque <= 0) {
 alert("Valor inválido...");
}

```
Essa verificação coloca uma camada a mais de segurança, ela verifica duas coisas importantes:

isNaN(valorSaque): Não aceita continuar se usuário digitar letras ou símbolos.
valorSaque <= 0: Não aceita valores negativos ou nulos.


### 3. Escalabilidade:
```javascript
const notasDisponiveis = [50, 10, 5, 1];
notasDisponiveis.sort((a, b) => b - a);
```
Utilizei o método .sort((a, b) => b - a). Para garantir que o Array de notas esteja sempre ordenado de forma decrescente (da maior para menor). 
Dessa forma, se no futuro precisar acrescentar novas notas, o Array se organiza automaticamente para continuar priorizando a entrega da maior nota no momento do saque.

### 4. Cálculo:
```javascript
notasDisponiveis.forEach(nota => {
    let quantidadeNotas = Math.floor(valorSaque / nota);
    valorSaque = valorSaque % nota; 
    // ...
});
```
O forEach está percorrendo cada nota disponível. Primeiro, ele faz uma divisão inteira com o Math.floor, para verificar quantas vezes a nota atual cabe no valor solicitado de saque. 
O próximo passo, é atualizar a variável valorSaque com o resto da divisão. Assim, o que sobrou será passado para a próxima nota menor e o novo valor será usado no próximo loop, até que todo o valor seja distribuido. 

### 5. Exibição do Resultado:
```javascript

if (quantidadeNotas > 0) {
    console.log(`GC$ ${nota},00 -> ${quantidadeNotas}`);
}
```
O sistema só mostra no console as notas que realmente foram usadas (quantidade maior que 0), com a intenção de entregar uma experiência mais limpa para o usuário.

---

📝 Desenvolvido por Bruna Lais Lindner durante a formação em Desenvolvimento com VTEX IO da Growdev
