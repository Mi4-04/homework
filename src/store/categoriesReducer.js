const ADD_CATEGORIES = 'ADD_CATEGORIES'
const initialState = {
  categories: [],

}

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return { ...state, categories: [...state.categories, action.payload] }

    default:
      return state;
  }
}

export const addCategoriesAction = (payload) => ({ type: ADD_CATEGORIES, payload })
