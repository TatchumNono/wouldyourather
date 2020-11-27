import { GET_QUESTIONS_SUCCESS, GET_QUESTION_FETCH } from "./questionType";

export const questionsFetch = () => {
  return {
    type: GET_QUESTIONS_SUCCESS,
  };
};

export const questionsFetchSuccess = () => {
  return {
    type: GET_QUESTION_FETCH,
  };
};
