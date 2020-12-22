import React, { useContext, useState } from 'react';
import { transaction_Context } from './transactionContext.js';

function Child() {

  let {new_trans,add_transaction} = useContext(transaction_Context);
  let [newDesc,setDesc] = useState(" ");
  let [newAmount,setAmount] = useState(" ");
  const addition = (event) =>{
    event.preventDefault()
    add_transaction({
      Amount:newAmount,
      desc:newDesc
    })
    
  } 


  return (

    <div className="container">
      <p> Developed By Umar Hassan Malik</p>

      <h1 className="text_center"><i>Expense Tracker</i></h1>
      <h3 className="balance">CURRENT BALANCE</h3>
      <h1 className="balance">500$</h1>
      <div className="container_inside">
        <h5>INCOME<br />100$</h5>

        <h5>EXPENSE<br />500$</h5>
      </div>
      <h3>History</h3>
      <hr />
      <ul className="listofitems">
        {Transaction.map((trans_obj,ind) => {
        
          return (<li key={ind}>
              <span> {trans_obj.desc}</span>
              <span> {trans_obj.Amount} </span>
            </li>
          )
        })}
    </ul>


      <form  onSubmit={new_trans}>
        <h3>Add Your Transaction Below</h3>
        <hr />
        <label >Enter Item Name <br />
          <input type="name" className="fields" onChange={(ev)=>setDesc(ev.target.value)} placeholder="Names of Items" required></input>
        </label>
        <label>
          Enter Amount<br />
          <input type="number" className="fields" onChange={(ev)=>setAmount(ev.target.value)} required placeholder="Value in $ Dollar"></input>
        </label>
        <div>
          <input className="fbutton" type="submit" required value="Add Transaction" ></input>
        </div>
      </form>

    </div>
  );
}

export default Child;
