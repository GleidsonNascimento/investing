import React, { useState, useEffect } from "react";
import "./home.css";

import Slider from "@mui/material/Slider";

export default function Investing() {
  const [initialInvesting, setInitialInvesting] = useState(1000);
  const [valorTotal, setValorTotal] = useState(0);
  const [valorMensal, setValorMensal] = useState(250);
  const [Mensal, setMensal] = useState(1);
  const [rendimentoPoupanca, setRendimentoPoupanca] = useState(0);
  const [rendimentoTesouro, setRendimentoTesouro] = useState(0);
  const [valueFinal, setValuefinal] = useState(0);
  const [unformattedValue, setUnformattedValue] = useState(0);
  const [unformattedValue2, setUnformattedValue2] = useState(0);

  useEffect(() => {
    const investment = () => {
      const valorTotalInvestido = initialInvesting + valorMensal * Mensal;
      setValorTotal(valorTotalInvestido);
      const rendimentoPoup = calcularRendimentoPoupanca(
        valorTotalInvestido,
        Mensal,
        0.003
      );
      setRendimentoPoupanca(rendimentoPoup);
      const rendimentoTsr = calcularRendimentoTesouro(
        valorTotalInvestido,
        Mensal,
        0.0732
      );

      setRendimentoTesouro(rendimentoTsr);
      const valorFinal = valorTotalInvestido + parseFloat(rendimentoPoup);
      const formattedValueFinal = valorFinal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      setValuefinal(formattedValueFinal);
    };
    investment();
  }, [initialInvesting, valorMensal, Mensal]);

  useEffect(() => {
    const savedInitialInvesting = localStorage.getItem("initialInvesting");
    const savedValorMensal = localStorage.getItem("valorMensal");
    const savedMensal = localStorage.getItem("Mensal");

    if (savedInitialInvesting)
      setInitialInvesting(Number(savedInitialInvesting));
    if (savedValorMensal) setValorMensal(Number(savedValorMensal));
    if (savedMensal) setMensal(Number(savedMensal));
  }, []);

  const handleAdd = () => {
    const newInitialInvesting = initialInvesting + 250;
    setInitialInvesting(newInitialInvesting);
    localStorage.setItem("initialInvesting", newInitialInvesting);
  };

  const handleSubtract = () => {
    if (initialInvesting >= 250) {
      const newInitialInvesting = initialInvesting - 250;
      setInitialInvesting(newInitialInvesting);
      localStorage.setItem("initialInvesting", newInitialInvesting);
    }
  };

  const handleAddM = () => {
    const newValorMensal = valorMensal + 250;
    setValorMensal(newValorMensal);
    localStorage.setItem("valorMensal", newValorMensal);
  };

  const handleSubtractM = () => {
    if (valorMensal >= 250) {
      const newValorMensal = valorMensal - 250;
      setValorMensal(newValorMensal);
      localStorage.setItem("valorMensal", newValorMensal);
    }
  };

  const handleMensalidadeChange = (event, newValue) => {
    setMensal(newValue);
    localStorage.setItem("Mensal", newValue);
  };

  const calcularRendimentoPoupanca = (valor, tempo) => {
    const selic = 0.08;
    const rendimento = valor * (Math.pow(1 + selic / 12, tempo) - 1);
    return rendimento;
  };

  const calcularRendimentoTesouro = (valor, tempo, taxa) => {
    const rendimento = valor * Math.pow(1 + taxa / 12, tempo) - valor;
    return rendimento;
  };

  return (
    <div className="background">
      <h1 className="tittle">Simulador de investimento</h1>

      <div className="boxes simulator-1">
        <div className="box-1">
          <h3>Para começar, qual valor você gostaria de investir</h3>
          <div className="input-1">
            <input
              type="text"
              value={initialInvesting.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              onChange={(e) => {
                const value = e.target.value.replace(/[^\d]/g, "");

                setUnformattedValue(value);

                setInitialInvesting(parseFloat(value / 100));
              }}
            />
            <button className="less" onClick={handleSubtract}>
              <h3>-</h3>
            </button>
            <button className="more" onClick={handleAdd}>
              <h3>+</h3>
            </button>{" "}
          </div>
          <h3>Por mês, quanto gostaria de depositar?</h3>
          <div className="input-1">
            <input
              type="text"
              value={valorMensal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              onChange={(e) => {
                const value = e.target.value.replace(/[^\d]/g, "");
                setUnformattedValue2(value);
                setValorMensal(parseFloat(value / 100));
              }}
              onBlur={(e) => {}}
            />{" "}
            <button className="less" onClick={handleSubtractM}>
              <h3>-</h3>
            </button>
            <button className="more" onClick={handleAddM}>
              <h3>+</h3>
            </button>{" "}
          </div>
          <h3>Quanto tempo deixaria seu dinheiro investido</h3>
          <h1 className="mes">{Mensal} Meses</h1>
          <Slider
            aria-label="Restricted values"
            value={Mensal}
            onChange={handleMensalidadeChange}
            color="secondary"
            min={1}
            max={36}
            marks={[
              { value: 1 },
              { value: 3 },
              { value: 6 },
              { value: 12 },
              { value: 24 },
              { value: 36 },
            ]}
            valueLabelDisplay="auto"
            step={null}
          />
        </div>
        <div className="box-2">
          <h2 className="mensal">Em {Mensal} meses você teria</h2>
          <h1 className="total">
            {" "}
            {valueFinal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h1>
          <p>Valor líquido com os impostos descontados</p>
          <p>
            Total investido:{" "}
            {valorTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="semTest">
            Na poupança, seu dinheiro renderia:
            {!isNaN(rendimentoPoupanca)
              ? rendimentoPoupanca.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : "0.00"}
          </p>
          <p className="test">
            No Tesouro Prefixado, seu dinheiro renderia:{" "}
            {!isNaN(rendimentoTesouro)
              ? rendimentoTesouro.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : "0.00"}
          </p>
        </div>
      </div>
    </div>
  );
}
