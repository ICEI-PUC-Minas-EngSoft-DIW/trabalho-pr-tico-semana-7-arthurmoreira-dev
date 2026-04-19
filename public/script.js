




const nome = prompt("Qual é o seu nome?");


let rendaStr = prompt("Qual é a sua renda mensal? (R$)");
while (isNaN(Number(rendaStr)) || rendaStr.trim() === "") {
  rendaStr = prompt("Valor inválido! Digite um número para a renda mensal:");
}
const renda = Number(rendaStr);

// Quantidade de despesas (number) — limitada entre 1 e 5
let qtdStr = prompt("Quantas despesas você vai informar? (1 a 5)");
while (isNaN(Number(qtdStr)) || qtdStr.trim() === "") {
  qtdStr = prompt("Valor inválido! Digite um número entre 1 e 5:");
}
let qtd = Number(qtdStr);

// Aplica o limite: mínimo 1, máximo 5
if (qtd < 1) qtd = 1;
if (qtd > 5) qtd = 5;



let totalDespesas = 0;

for (let i = 1; i <= qtd; i++) {
  // Validação com while para cada despesa
  let despesaStr = prompt(`Despesa ${i}: qual o valor? (R$)`);
  while (isNaN(Number(despesaStr)) || despesaStr.trim() === "") {
    despesaStr = prompt(`Valor inválido! Digite um número para a Despesa ${i}:`);
  }
  totalDespesas += Number(despesaStr);
}


let sobra = 0;
let mensagem = "";

if (totalDespesas > renda) {
  sobra = renda - totalDespesas; 
  mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
  sobra = renda - totalDespesas;
  if (sobra >= renda * 0.30) {
    mensagem = "✅ Ótimo: boa margem de sobra.";
  } else {
    mensagem = "🙂 Ok: dá para melhorar a sobra.";
  }
}

const resultado =
  `===== RESUMO DO ORÇAMENTO =====\n` +
  `👤 Nome:             ${nome}\n` +
  `💰 Renda:            R$ ${renda.toFixed(2)}\n` +
  `💸 Total de despesas: R$ ${totalDespesas.toFixed(2)}\n` +
  `🏦 Sobra:            R$ ${sobra.toFixed(2)}\n` +
  `📊 Situação:         ${mensagem}\n` +
  `================================`;

alert(resultado);
console.log(resultado);