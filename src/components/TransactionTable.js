import React from 'react';
import './TransactionTable.css';

const TransactionTable = ({ transactions }) => {
    return (
        <table className="transaction-table">
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Descrição</th>
                    <th>Entrada</th>
                    <th>Saída</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.codigo}>
                        <td>{transaction.codigo}</td>
                        <td>{transaction.descricao}</td>
                        <td>{transaction.entrada}</td>
                        <td>{transaction.saida}</td>
                        <td>{transaction.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;
