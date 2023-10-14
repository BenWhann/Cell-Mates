import {
REMOVE_MATCHES,
UPDATE_USER
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case REMOVE_MATCHES:
      return {
        ...state,
//        products: [...action.products],
      };
    default:
      return state;
  }
};
