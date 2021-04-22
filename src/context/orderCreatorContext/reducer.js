import { ADD_INFO_TO_ORDER } from './action'

const initialState = {
  categories: [
    { id: 1, title: 'Картины' },
    { id: 2, title: 'Обработка фото' },
    { id: 3, title: 'Шарж' },
  ],
  enter: [],
}

const orderCreatorReducer = (state = initialState, action) => {
  let updatedInfo;
  let updatedItemIndex;

  switch (action.type) {
    case ADD_INFO_TO_ORDER:
      updatedInfo = [...state.enter]
      updatedItemIndex = updatedInfo.findIndex(
        (item) => item === action.payload,
      )

      if (updatedItemIndex < 0) {
        updatedInfo.push({ ...action.payload, quantity: 1 })
      } else {
        const updateItem = {
          ...updatedInfo[updatedItemIndex],
        }
        updateItem.quantity++;
        updatedInfo[updatedItemIndex] = updateItem
      }
      return { ...state, enter: updatedInfo }
    default:
      return state;
  }
}

export default orderCreatorReducer
