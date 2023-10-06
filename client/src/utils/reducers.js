import {
  ADD_CONVICT
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_CONVICT:
      return {
        ...state,
//        products: [...action.products],
      };
    default:
      return state;
  }
};
