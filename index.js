function calculandoRankeadas(heroi, vitorias, derrotas) {
    // Calcular o saldo de Rankeadas (vitórias - derrotas)
    const numeroVitorias = vitorias;
    const numeroDerrotas = derrotas;
    // Determinar a classificação com base no saldo de Rankeadas
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Saída exemplo: nome do jogador, numero de vitorias, nivel
    const message = `O heroi ${heroi} tem ${numeroVitorias} vitórias, está no nível ${nivel} e teve ${numeroDerrotas} derrotas.`;

    // Texto exibido
    document.querySelector('#header').innerHTML = message;

    // Console log
    console.log(message);
}

// Exemplo de uso
const nomeJogador = prompt("Digite o nome do jogador:");
const totalVitorias = prompt("Digite o total de vitórias:");
const totalDerrotas = prompt("Digite o total de derrotas:");

calculandoRankeadas(nomeJogador, parseInt(totalVitorias), parseInt(totalDerrotas));
   
   
    
   