import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Nova transakcija: </h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Opis: </label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Iznos:  <br />
           </label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="..." />
        </div>
        <button className="btn">OK</button>
      </form>
    </>
  )
}
