// dùng file này để tránh dùng lại các action mỗi khi muốn dùng

export const plusAction = () => {
    return {
        type: 'PLUS_ACTION',
        //payload: dùng payload có dữ liệu bên ngoài cần thực hiện
    }
}
export const subAction = () => {
    return {
        type: 'SUB_ACTION'
    }
}
export const mulAction = () => {
    return {
        type: 'MUL_ACTION',
        //payload: dùng payload có dữ liệu bên ngoài cần thực hiện
    }
}
export const divAction = () => {
    return {
        type: 'DIV_ACTION'
    }
}