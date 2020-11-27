import { GET_QUESTION_SUCCESS, GET_QUESTION_FETCH } from "./questionType";
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

export const fetchQuestion = () => {
  return (dispatch) => {
    dispatch(questionsFetch);
    const call = API._getQuestions();
    call.then((res) =>  dispatch(questionsFetchSuccess(res)  );
  };
};
