import * as types from '../types';

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  data: [],
};

export default reducersPages = (state = initialState, action) => {
  switch (action.type) {
    case `${types.GET_PAGES}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case `${types.GET_PAGES}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload.data,
      };
    }
    case `${types.GET_PAGES}_REJECTED`: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
