
export const addGoods = ({commit},newGoods) => {
    commit('ADDGOODS',newGoods)
}
export const subGoods = ({commit},newGoods) => {
    commit('SUBGOODS',newGoods)
}
export const setSum = ({commit},val) => {
    commit('SETSUM',val)
}
export const calSum = ({commit}) => {
    commit('CALSUM')
}


