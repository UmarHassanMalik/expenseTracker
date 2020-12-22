import React,{createContext, useReducer } from 'react';
import Transaction_Reducer from './transactionReducer';


const first_transaction = [
    { Amount: 2500, desc: "Cash" },
    { Amount: -1500, desc: "Bills" },
    { Amount: -200, desc: "Vegetables" }

]

export const transaction_Context = createContext(first_transaction);

export let Transaction_Provider = ({children}) => {

let [state, dispatch] = useReducer(Transaction_Reducer, first_transaction)
    function add_transaction(trans_obj){
        dispatch({
            type:add_transaction,
            payload: 
            {
               Amount: trans_obj.Amount,
               desc: trans_obj.desc
            },
            
        }
        
        )
    }
        return ( 
            <transaction_Context.Provider value = {{
                Transaction:state, 
                add_transaction
            }}>
                {children}
            </transaction_Context.Provider>
        )

    }
