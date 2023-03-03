import React from "react";
import "./home.css";
import db  from '../db.json'

export default function Investing() {
    console.log(db.indicadores)
  return (
    <div className="background">
      <h1>Simulador de investimento</h1>
      <div className="simulator">
        <div className="painel">
          <h3>simulador</h3>
          <div className="painel-info">
            <div className="part-1">
              <h4>rendimento</h4>
              <div className="buttons">
                <input type="button" value="bruto" />
                <input type="button" value="liquido" />
              </div>
              <input type="text" />
              <p>Prazo (em meses)</p>
              <input type="text" />
              <p>IPCA (ao ano)</p>
              <input type="text" />
              <button>Limpar campos</button>
            </div>
            <div className="part-2">
              <h4>tipos de indexação</h4>
              <div className="button">
                <button>pre</button>
                <button>pós</button>
                <button>fixado</button>
              </div>
              <p>aporte mensal</p>
              <input type="text" />
              <p>CDI</p>
              <input type="text" />
              <p>CDI (ao ano)</p>
              <input type="text" />
              <button>Simular</button>
            </div>
          </div>
        </div>
        <div>
          <h3>Resultado da simulação</h3>
          <div>
            <div>
              <p>valor final bruto</p>
              <p>R$</p>
            </div>
            <div>
              <p>aliquota do IR</p>
              <p>R$</p>
            </div>
            <div>
              <p>valor pago em IR</p>
              <p>R$</p>
            </div>
            <div>
              <p>valor final liquido</p>
              <p>R$</p>
            </div>
            <div>
              <p>valor total investido</p>
              <p>R$</p>
            </div>
            <div>
              <p>ganho liquido</p>
              <p>R$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
