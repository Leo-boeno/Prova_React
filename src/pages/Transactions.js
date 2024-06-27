import React from 'react';
import TransactionTable from '../components/TransactionTable';
import transactions from '../data/transactions';
import './Transactions.css';

const Transactions = () => {
    return (
        <div className="transactions">
            <h1>Transações</h1>
            <TransactionTable transactions={transactions} />
        </div>
    );
};

export default Transactions;
