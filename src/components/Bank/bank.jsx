import { useState } from 'react'
import styles from './bank.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, removeCustomerAction } from '../../store/customerReducer'

const Bank = () => {
    const [value, setValue] = useState('')
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customer.customers)
    const dispatch = useDispatch()

    const addCash = () => {
        dispatch({
            type: 'ADD_CASH',
            payload:5
        })
    }

    const getCash = () => {
        dispatch({
            type: 'GET_CASH',
            payload:5
        })
    }

    const addCustomer = (name) => {
        const customer = {
            id: Date.now(),
            name
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }



    return (
        <div className={styles.container}>
            <div className={styles.actions}>
                <input type="text" value={value} onChange={e=>setValue(e.target.value)}/>
                <button onClick={addCash}>Пополнить счет</button>
                <button onClick={getCash}>Снять со счета</button>
                <hr />
                <button onClick={()=>addCustomer(prompt())}>Добавить пользователя</button>
            </div>
            <div>Сумма счета: {cash}</div>
            <hr />
            {customers.length ?
                <div>
                    {customers.map(customer => <div key={customer.id} onClick={()=> removeCustomer(customer)}>{  customer.name  }</div>)}
                </div> :
                <div>Нет пользователей</div>}
        </div>
    )
}

export default Bank;
