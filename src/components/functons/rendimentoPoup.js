function rendPoup({ valor, tempo }) {
  const selic = 0.08;
  const rendimento = valor * (Math.pow(1 + selic / 12, tempo) - 1);
  return <div>Rendimento da Poupança: {rendimento}</div>;
}

function calcularRendimentoTesouro({ valor, tempo, taxa }) {
  const tesouro = valor * Math.pow(1 + taxa / 12, tempo) - valor;
  return <div>Rendimento do Tesouro: {tesouro}</div>;
}

export { calcularRendimentoTesouro, rendPoup };
