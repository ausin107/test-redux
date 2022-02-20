import { useSelector, useDispatch } from "react-redux"
import {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {plusAction, subAction, mulAction, divAction, addHistory} from '../action/reducer1'
// page nào cũng có thể dùng các reducer đã combine ở trong store chỉ cần sử dụng các hook cơ bản của react-redux
// mô tả 1 trong các chức năng của redux là dùng " mọi lúc, mọi nơi "
function HomePage() {
    // lấy state từ redux store 
    const state = useSelector(state => state.reducer1)
    const state2 = useSelector(state => state.reducer2)
    const disPatch = useDispatch();
    const handlePlus = (data) => {
        disPatch(plusAction())
        disPatch(addHistory({
            id: uuidv4(),
            value: data
        }))
    }
    const handleSub = (data) => {
        disPatch(subAction())
        disPatch(addHistory({
            id: uuidv4(),
            value: data
        }))
    }
    const handleMul = (data) => {
        disPatch(mulAction())
        disPatch(addHistory({
            id: uuidv4(),
            value: data
        }))
    }
    const handleDiv = (data) => {
        disPatch(divAction())
        disPatch(addHistory({
            id: uuidv4(),
            value: data
        }))
    }
    console.log(state)
    console.log(state2)
    return (
            <>
            <h1>{state.value}</h1>
            <button onClick={() => handlePlus(state.value)}>Plus Action</button>
            <button onClick={() => handleSub(state.value)}>Subtract Action</button>
            <button onClick={() => handleMul(state.value)}>Multiply Action</button>
            <button onClick={() => handleDiv(state.value)}>Divice Action</button>
            <ul>
                HISTORY CACULATOR
                {state2.map(state => <li key={state.id}>
                    {state.value}
                </li>)}
            </ul>
            </>
        )
}
    


export default HomePage