function calcular() {
    const homens = document.getElementById('homens').value;
    const mulheres = document.getElementById('mulheres').value;
    const criancas = document.getElementById('criancas').value;

    const carneBovinaHomem = 0.5; // 500g = 0.5 kg
    const carneBovinaMulher = 0.3; // 300g = 0.3 kg
    const carneBovinaCrianca = 0.2; // 200g = 0.2 kg

    const frangoHomem = 0.2; // 200g = 0.2 kg
    const frangoMulher = 0.2; // 200g = 0.2 kg
    const frangoCrianca = 0.1; // 100g = 0.1 kg

    const linguicaHomem = 0.2; // 200g = 0.2 kg
    const linguicaMulher = 0.2; // 200g = 0.2 kg
    const linguicaCrianca = 0.2; // 200g = 0.2 kg

    const refrigeranteHomem = 0.3; // 300ml = 0.3 L
    const refrigeranteMulher = 0.4; // 400ml = 0.4 L
    const refrigeranteCrianca = 0.2; // 200ml = 0.2 L

    const cervejaHomem = 0.8; // 800ml = 0.8 L
    const cervejaMulher = 0.5; // 500ml = 0.5 L

    const totalCarne = (homens * carneBovinaHomem) + (mulheres * carneBovinaMulher) + (criancas * carneBovinaCrianca);
    const totalFrango = (homens * frangoHomem) + (mulheres * frangoMulher) + (criancas * frangoCrianca);
    const totalLinguica = (homens * linguicaHomem) + (mulheres * linguicaMulher) + (criancas * linguicaCrianca);
    const totalRefrigerante = (homens * refrigeranteHomem) + (mulheres * refrigeranteMulher) + (criancas * refrigeranteCrianca);
    const totalCerveja = (homens * cervejaHomem) + (mulheres * cervejaMulher);

    document.getElementById('resultado').innerHTML = `
        Total de carne bovina: ${totalCarne.toFixed(2)} kg<br>
        Total de frango: ${totalFrango.toFixed(2)} kg<br>
        Total de linguiça: ${totalLinguica.toFixed(2)} kg<br>
        Total de refrigerante: ${totalRefrigerante.toFixed(2)} L<br>
        Total de cerveja: ${totalCerveja.toFixed(2)} L
    `;
}
