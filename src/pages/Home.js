import React from 'react';
import transactions from '../data/transactions';
import './Home.css';

const Home = () => {
    // Calcular total de entradas, saídas e saldo atual
    const totalEntradas = transactions.reduce((acc, transaction) => acc + transaction.entrada, 0);
    const totalSaidas = transactions.reduce((acc, transaction) => acc + transaction.saida, 0);
    const saldoAtual = totalEntradas - totalSaidas;

    return (
        <div className="home">
            <h1>Home</h1>
            <div className="summary">
                <p>Total Entradas: {totalEntradas}</p>
                <p>Total Saídas: {totalSaidas}</p>
                <p>Saldo Atual: {saldoAtual}</p>
            </div>
        </div>
    );
};

export default Home;
