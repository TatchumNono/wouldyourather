import { GET_QUESTION_SUCCESS, GET_QUESTION_FETCH } from "./questionType";

export const questionsFetch = () => {
  return {
    type: GET_QUESTION_FETCH,
  };
};

export const questionsFetchSuccess = () => {
  return {
    type: GET_QUESTION_SUCCESS,
  };
};
export const questionUser
