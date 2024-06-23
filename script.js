document.addEventListener("DOMContentLoaded", function() {
    function calcularResultado() {
        const respostas = {
            q1: document.querySelector('input[name="q1"]:checked').value,
            q2: document.querySelector('input[name="q2"]:checked').value,
            q3: document.querySelector('input[name="q3"]:checked').value,
            q4: document.querySelector('input[name="q4"]:checked').value
        };

        let carreiraRecomendada = '';

        if (respostas.q1 === 'sim' && respostas.q3 === 'sim') {
            carreiraRecomendada = 'Engenharia de Software ou Design Gráfico';
        } else if (respostas.q2 === 'sim') {
            carreiraRecomendada = 'Medicina';
        } else if (respostas.q4 === 'sim') {
            carreiraRecomendada = 'Direito';
        } else {
            carreiraRecomendada = 'Arquitetura';
        }

        document.getElementById('resultado').innerHTML = `<p>Carreira Recomendada: <strong>${carreiraRecomendada}</strong></p>`;
    }
    function enviarFormularioContato(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        document.getElementById('mensagemEnviada').innerHTML = `<p>Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.</p>`;

        document.getElementById('contatoForm').reset();
    }

    document.getElementById('contatoForm').addEventListener('submit', enviarFormularioContato);

    window.calcularResultado = calcularResultado;
});
