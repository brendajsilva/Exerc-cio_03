function calcularReceitaRestaurante() {
    var pesos = [1.27, 0.873, 0.792, 0.559, 0.672, 0.714, 0.623]; // kg
    var precoPorKg = 14.95; // R$
    var totalPeso15min = pesos.reduce((a, b) => a + b, 0); // kg
    var mediaPeso = totalPeso15min / pesos.length; // kg
    var peso3h = mediaPeso * 4 * 3; // kg
    var receita3h = peso3h * precoPorKg; // R$
    var diasUteis = 22;
    var pesoMensal = peso3h * diasUteis; // kg
    var receitaMensal = receita3h * diasUteis; // R$
    document.getElementById("resultadoRestaurante").innerHTML = 
        "Peso Total Vendido no Mês: " + pesoMensal.toFixed(2) + " kg<br>" +
        "Receita Mensal: R$ " + receitaMensal.toFixed(2);
}