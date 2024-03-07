
let jurosPorParcela = 0.1;
let quantidadeMaximaParcelas = 12;

function SimularParcelas(){
    let valorEmprestimo = parseFloat(prompt('Digite o valor que você deseja pegar emprestado.'));
    let continuarSimulacao = true;

    while (continuarSimulacao) {
        for(let parcelas = 1; parcelas <= quantidadeMaximaParcelas; parcelas++) {
            alert(`Ao optar por ${parcelas} parcelas, você pagará R$ ${ValorParcela(valorEmprestimo, parcelas).toFixed(2)}`);
        }

        let resposta = prompt('Deseja continuar a simulação? Digite SIM para continuar ou qualquer outra coisa para parar.');
        continuarSimulacao = (resposta === 'SIM');
    }
}

function ValorParcela(valorEmprestimo, parcelas){
    var jurosTotal = parcelas * jurosPorParcela * valorEmprestimo;
    return valorEmprestimo + jurosTotal;
}

SimularParcelas();
