import React, { useState } from 'react'

const Expence = () => {

    const [input, setInput] = useState('');
    const [amount, setAmount] = useState('');

    const [expence, setExpence] = useState([])

    const addExpence = () => {
        if (!input || !amount) return;

        const newExpence = {
            id: expence.length + 1,
            title: input,
            amount: amount
        }
        setExpence([...expence, newExpence])
        setInput('');
        setAmount('');
    }

    const deleteExpence = (id) => {
        setExpence(expence.filter((expence) => expence.id !== id))
    }

    return (
        <div>
            <h2>Expence Tracker</h2>
            <div>
                <input type='text' placeholder='Enter Expence' value={input} onChange={(e) => setInput(e.target.value)} />
                <input type='number' placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button onClick={addExpence}>Add Expence</button>
            </div>
            <ul className='expence-list'>
                {
                    expence.map((expence) => (
                        <li key={expence.id}>
                            <span>{expence.title}</span>
                            <span>{expence.amount}</span>
                            <button onClick={() => deleteExpence(expence.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Expence