// tạo reducer để hiện thực các hàm logic khi dùng vs redux
const initialSate = {
    id: 0,
    value: 0
}
//initial state khi la obj phải update theo kiểu immuation
const reducer1 = (state = initialSate, action) => {
    switch (action.type) {
        case 'PLUS_ACTION':
            return {
                ...state,
                value: state.value + 1
            }
        case 'SUB_ACTION':
            return {
                ...state,
                value: state.value - 1
            }
        case 'MUL_ACTION':
            return {
                ...state,
                value: state.value * 2
            }
        case 'DIV_ACTION':
            return {
                ...state,
                value: state.value / 2
            }
        default:
            return state
    }
}


export default reducer1