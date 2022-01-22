// tạo reducer để hiện thực các hàm logic khi dùng vs redux
const initialSate = 0
const reducer1 = (state = initialSate, action) => {
    switch (action.type) {
        case 'PLUS_ACTION':
            return state + 1
        case 'SUB_ACTION':
            return state - 1
        case 'MUL_ACTION':
            return state * 2
        case 'DIV_ACTION':
            return state / 2
        default:
            return state
    }
}

export default reducer1