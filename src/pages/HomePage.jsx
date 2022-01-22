import { useSelector, useDispatch } from "react-redux"
import {useState, useEffect} from 'react'
import {plusAction, subAction, mulAction, divAction} from '../action/reducer1'
// page nào cũng có thể dùng các reducer đã combine ở trong store chỉ cần sử dụng các hook cơ bản của react-redux
// mô tả 1 trong các chức năng của redux là dùng " mọi lúc, mọi nơi "
function HomePage() {
    const state = useSelector(state => state.reducer1) 
    const disPatch = useDispatch();
    const handlePlus = () => {
        const action = plusAction(state)
        disPatch(action)
    }
    const handleSub = () => {
        const action = subAction(state)
        disPatch(action)
    }
    const handleMul = () => {
        const action = mulAction(state)
        disPatch(action)
    }
    const handleDiv = () => {
        const action = divAction(state)
        disPatch(action)
    }
    return (
            <>
            <h1>{state}</h1>
            <button onClick={handlePlus}>Plus Action</button>
            <button onClick={handleSub}>Subtract Action</button>
            <button onClick={handleMul}>Multiply Action</button>
            <button onClick={handleDiv}>Divice Action</button>
            </>
        )
}
    


export default HomePage