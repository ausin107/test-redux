//file này thực chất là Action creator, khác với action 
// dùng file này để tránh dùng lại các action mỗi khi muốn dùng

//nếu có truyền data thì truyền vào payload
// export const plusAction = (data) => {
//     return {
//         type: 'PLUS_ACTION',
//         payload: data
//     }
// }
export const addHistory = (data) => {
    return {
        type: 'ADD_HISTORY',
        payload: data
    }
}
export const plusAction = (data) => {
    return {
        type: 'PLUS_ACTION',
        payload: data
        //payload: dùng payload có dữ liệu bên ngoài cần thực hiện
    }
}
export const subAction = (data) => {
    return {
        type: 'SUB_ACTION',
        payload: data
    }
}
export const mulAction = (data) => {
    return {
        type: 'MUL_ACTION',
        payload: data
    }
}
export const divAction = (data) => {
    return {
        type: 'DIV_ACTION',
        payload: data
    }
}