function calcMMR(mmrInicial, mmrFinal) {
    let price = 0;
    let mmrAtual = mmrInicial;

    while (mmrAtual < mmrFinal) {
        if (mmrAtual < 770) {
            price += 30;
            mmrAtual += 100;
        } else if (mmrAtual < 1540) {
            price += 33;
            mmrAtual += 100;
        } else if (mmrAtual < 2310) {
            price += 36;
            mmrAtual += 100;
        } else if (mmrAtual < 3080) {
            price += 40;
            mmrAtual += 100;
        } else if (mmrAtual < 3850) {
            price += 43;
            mmrAtual += 100;
        } else if (mmrAtual < 4620) {
            price += 47;
            mmrAtual += 100;
        } else if (mmrAtual < 5420) {
            price += 55;
            mmrAtual += 100;
        } else if (mmrAtual < 6000) {
            price += 70;
            mmrAtual += 100;
        } else {
            break;
        }
    }
    return price;
}

function onCalculate() {
    const mmrInicial = parseInt(document.getElementById('mmrInicial').value);
    const mmrFinal = parseInt(document.getElementById('mmrFinal').value);

    if (isNaN(mmrInicial) || isNaN(mmrFinal)) {
        alert("Por favor, insira valores válidos para ambos os MMR.");
        return;
    }

    if (mmrInicial >= mmrFinal) {
        alert("O MMR inicial deve ser menor que o MMR final.");
        return;
    }

    const price = calcMMR(mmrInicial, mmrFinal);
    document.getElementById('result').textContent = `O preço para aumentar o MMR de ${mmrInicial} para ${mmrFinal} é R$${price.toFixed(2)}`;
}
