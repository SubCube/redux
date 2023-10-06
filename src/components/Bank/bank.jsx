import { useState } from 'react'
import styles from './bank.module.css'
import { useDispatch, useSelector } from 'react-redux'

const Bank = () => {
    const [value, setValue] = useState('')
    const cash = useSelector(state => state.cash)
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



    return (
        <div className={styles.container}>
            <div className={styles.actions}>
                <input type="text" value={value} onChange={e=>setValue(e.target.value)}/>
                <button onClick={addCash}>Пополнить счет</button>
                <button onClick={getCash}>Снять со счета</button>
            </div>
            <div>Сумма счета: {cash}</div>
        </div>
    )
}

export default Bank;
