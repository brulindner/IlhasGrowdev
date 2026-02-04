let valorSaque = parseInt(prompt("Informe qual valor deseja sacar: (Lembrando, que só é aceito o saque de valores inteiros)"))


if (isNaN(valorSaque) || valorSaque <= 0){
    alert("Valor inválido, por favor informe um número inteiro positivo!")
}
else{
    const notasDisponiveis = [50, 10, 5, 1];

    notasDisponiveis.sort((a, b) => b - a);

    console.log(`Saque solicitado: GC$ ${valorSaque.toFixed(2)}`)

    notasDisponiveis.forEach(nota => {
        let quantidadeNotas = Math.floor(valorSaque / nota);

        valorSaque = valorSaque % nota;

        if(quantidadeNotas > 0){
        console.log(`GC$ ${nota.toFixed(2)} -> ${quantidadeNotas}`);
        }
})
}


