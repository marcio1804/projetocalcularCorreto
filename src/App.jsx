import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [operador, setOperador] = useState('+');
  const [resposta, setResposta] = useState('');
  const [pontos, setPontos] = useState(0);
  const [mensagem, setMensagem] = useState('');

  const operadores = ['+', '-', '*'];

  function sortear() {
    const novoNumero1 = Math.floor(Math.random() * 100);
    const novoNumero2 = Math.floor(Math.random() * 100);
    const novoOperador = operadores[Math.floor(Math.random() * operadores.length)];

    setNumero1(novoNumero1);
    setNumero2(novoNumero2);
    setOperador(novoOperador);
    setResposta('');
    setMensagem('');
  }

  useEffect(() => {
    sortear();
  }, []);

  function calcularRespostaCorreta() {
    switch (operador) {
      case '+': return numero1 + numero2;
      case '-': return numero1 - numero2;
      case '*': return numero1 * numero2;
      default: return 0;
    }
  }

  function validar() {
    const correta = calcularRespostaCorreta();
    const valorDigitado = parseInt(resposta, 10);

    if (valorDigitado === correta) {
      setPontos(pontos + 1);
      setMensagem('✅ Acertou!');
    } else {
      setMensagem(`❌ Errou! A resposta correta era ${correta}.`);
    }

    // Atualiza o desafio mesmo com erro
    setTimeout(() => {
      sortear();
    }, 1500);
  }

  return (
    <div className="app-container">
      <div className="wrapper">
        {}
        <div className="header">
  <div className="header-left">
    <img src="/logotrab2.png" alt="Logo" className="logo" />
    <h2>Ferramenta de aprendizagem de cálculo</h2>
  </div>
  <span className="data">07/06/2022</span>
</div>

        {}
        <div className="main">
          <div className="content">
            <img src="/meninotrab.jpg" alt="Educação" className="cover" />

            <div className="post">
              <h1 className="title">Para ser muito bom amanhã é preciso começar a praticar hoje</h1>
              <div className="meta">
                <span>Prof. Cleiton</span>
                <span>24 Fev 25</span>
                <span>16:40</span>
              </div>
              <p>
              São nos primeiros anos escolares que as crianças aprendem os fundamentos da matemática, inclusive as quatro operações - soma, subtração, multiplicação e divisão. Qualquer dificuldade que a criança tenha nessa fase se refletirá por toda a sua vida escolar :
              </p><br></br>
              <p>
                Aqui você e seu filho irão encontrar exercícios relacionados ao conteúdo ensinado
                nos primeiros anos escolares e buscarão aperfeiçoar seu conhecimento nas operações básicas.
              </p>
            </div>

            <div className="post">
              <h1 className="title">Matemática: O Alicerce para o Sucesso Escolar!</h1>
              <div className="meta">
                <span>Prof. Cleiton</span>
                <span>24 Fev 25</span>
                <span>16:40</span>
              </div>
              <p>
                Nos primeiros anos escolares, as crianças constroem a base do raciocínio lógico
                e aprendem as quatro operações essenciais: adição, subtração, multiplicação e divisão.
              </p>
              <p>
              Dificuldades nessa fase podem afetar o desempenho escolar ao longo de toda a jornada! 
              </p>
              <p>
                Aqui, você encontra exercícios divertidos e educativos para ajudar seu filho a dominar
                as operações básicas e desenvolver confiança na matemática. 💡
              </p><br></br>
              <p>
                Vamos juntos fortalecer essa base e transformar desafios em conquistas!
              </p>
              <p>
              #MatemáticaParaCrianças #EducaçãoMatemática #OperaçõesBásicas
              </p>
              <p>
              #AprendizadoDivertido #FundamentosEscolares #MatemáticaFácil
              </p>
              <p>
              #ConfiançaNosNúmeros
              </p>
            </div>
          </div>

          {}
          <div className="sidebar">
            <div className="score">Você tem {pontos} ponto{pontos !== 1 ? 's' : ''}</div>
            <button className="btn primary" onClick={sortear}>Sortear Desafio</button>

            <div className="question">Quanto é:</div>
            <div className="operation">{numero1} {operador} {numero2}</div>
            <div className="resposta">Sua Resposta:</div>

            <input
              className="input"
              type="number"
              value={resposta}
              onChange={(e) => setResposta(e.target.value)}
              placeholder=""
            />

            <button className="btn success" onClick={validar}>Validar</button>
            <button className="btn danger" onClick={() => {
              setPontos(0);
              sortear();
            }}>Novo Jogo</button>

            {}
            {mensagem && <div className="mensagem">{mensagem}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
