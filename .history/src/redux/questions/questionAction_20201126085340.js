import { GET_QUESTIONS_SUCCESS, GET_QUESTION_FETCH } from "./questionType";

export const fetchQuestions = (user) => {
  return {
    type: GET_QUESTIONS_SUCCESS,
    payload: user,
  };
};
export 
