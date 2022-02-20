// thường sẽ có nhiều reducer khác nhau để giải quyết các công việc khác nhau


const historyList = []
const reducer2 = (state = historyList, action) => {
    switch (action.type) {
        case 'ADD_HISTORY':
            return [...state, action.payload]
        default:
            return state
    }
}

export default reducer2