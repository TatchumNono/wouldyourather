import {
  GET_QUESTION_SUCCESS,
  GET_QUESTION_FETCH,
  ADD_QUESTIONS,
} from "./questionType";
import * as API from "../../_DATA";

export const questionsFetch = () => {
  return {
    type: GET_QUESTION_FETCH,
  };
};

export const questionsFetchSuccess = (res) => {
  return {
    type: GET_QUESTION_SUCCESS,
    payload: res,
  };
};

export const questionAdd = () => {
  return {
    type: ADD_QUESTIONS,
    payload: question,
  };
};

export const saveQuestion = (question) = {
  return (dispatch,question) => {
    const call = API._saveQuestion(question)
    call.then((res)=> console.log(res))
  }
}

export const fetchQuestion = () => {
  return (dispatch) => {
    dispatch(questionsFetch);
    const call = API._getQuestions();
    call.then((res) => dispatch(questionsFetchSuccess(res)));
  };
};
