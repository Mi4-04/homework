export const ADD_INFO_TO_ORDER = 'ADD_INFO_TO_ORDER'

export const addInfoToOrder = (infoToOrders) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: ADD_INFO_TO_ORDER,
      payload: infoToOrders,
    })
  }, 700)
}
