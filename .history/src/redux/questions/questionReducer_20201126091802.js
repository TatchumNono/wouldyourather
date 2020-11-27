import { GET_USERS_SUCCESS } from "../users/userType";
import { GET_QUESTION_SUCCESS, GET_QUESTION_FETCH } from "./questionType";

const initialState = {
  loading: false,
  question: null,
};

const question = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTION_FETCH:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        question: action.payload,
      };
    default:
      return state;
  }
};
