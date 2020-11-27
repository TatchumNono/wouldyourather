import { GET_QUESTION_SUCCESS, GET_QUESTION_FETCH } from "./questionType";

const initialState = {
  loading: false,
  question: null,
};

export const question = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION_FETCH:
      return {
        ...state,
        loading: true,
      };
    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        question: action.payload,
      };
    default:
      return state;
  }
};
