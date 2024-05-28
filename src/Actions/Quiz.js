import { tokenConfig } from "./Auth";
import axios from "axios";
import { returnErrors } from "./Messages";
import {
  START_TEST_SUCCESS,
  START_TEST_FAIL,
  SUBMIT_ANSWER_SUCCESS,
  SUBMIT_ANSWER_FAIL,
  COMPLETE_TEST_SUCCESS,
  COMPLETE_TEST_FAIL,
  FETCH_COMPLETED_TESTS_SUCCESS,
  FETCH_COMPLETED_TESTS_FAIL,
  FETCH_ALL_TEST_INSTANCES_SUCCESS,
  FETCH_ALL_TEST_INSTANCES_FAIL,
  RETRIEVE_INDIVIDUAL_QUESTION_SUCCESS,
  RETRIEVE_INDIVIDUAL_QUESTION_FAIL,
  FETCH_USER_SCORE_SUCCESS,
  FETCH_USER_SCORE_FAIL,
  FETCH_TEST_RESULTS_SUCCESS,
  FETCH_TEST_RESULTS_FAIL,
  FETCH_TOTAL_STUDY_TIME_SUCCESS,
  FETCH_TOTAL_STUDY_TIME_FAIL,
} from "./Types";

// Action to start a test
export const startTest =
  (exam_id, subject_name, year_value) => (dispatch, getState) => {
    const body = JSON.stringify({
      exam: exam_id,
      subject: subject_name,
      year: year_value,
    });
    axios
      .post("/api/exams/start-test/", body, tokenConfig(getState))
      .then((res) =>
        dispatch({
          type: START_TEST_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type: START_TEST_FAIL });
      });
  };

export const submitAnswer =
  (test_instance_id, question_id, selected_option) => (dispatch, getState) => {
    const body = JSON.stringify({
      test_instance: test_instance_id,
      question: question_id,
      selected_option: selected_option,
    });
    axios
      .post("/api/exams/submit-answer/", body, tokenConfig(getState))
      .then((res) =>
        dispatch({
          type: SUBMIT_ANSWER_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type: SUBMIT_ANSWER_FAIL });
      });
  };

// Action to complete a test
export const completeTest = (test_instance_id) => (dispatch, getState) => {
  axios
    .patch(
      `/api/exams/complete-test/${test_instance_id}/`,
      {},
      tokenConfig(getState)
    )
    .then((res) =>
      dispatch({
        type: COMPLETE_TEST_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: COMPLETE_TEST_FAIL });
    });
};

// Action to fetch completed tests
export const fetchCompletedTests = () => (dispatch, getState) => {
  axios
    .get("/api/exams/completed-tests/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: FETCH_COMPLETED_TESTS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: FETCH_COMPLETED_TESTS_FAIL });
    });
};

// Action to fetch all test instances
export const fetchAllTestInstances = () => (dispatch, getState) => {
  axios
    .get("/api/exams/all-test-instances/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: FETCH_ALL_TEST_INSTANCES_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: FETCH_ALL_TEST_INSTANCES_FAIL });
    });
};

// Action to retrieve an individual question
export const retrieveIndividualQuestion =
  (test_instance_id, question_id) => (dispatch, getState) => {
    axios
      .get(
        `/api/exams/test-instances/${test_instance_id}/questions/${question_id}/`,
        tokenConfig(getState)
      )
      .then((res) =>
        dispatch({
          type: RETRIEVE_INDIVIDUAL_QUESTION_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type: RETRIEVE_INDIVIDUAL_QUESTION_FAIL });
      });
  };

// Action to get user score
export const fetchUserScore = (test_instance_id) => (dispatch, getState) => {
  axios
    .get(`/api/exams/user-score/${test_instance_id}/`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: FETCH_USER_SCORE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: FETCH_USER_SCORE_FAIL });
    });
};

// Action to get test results
export const fetchTestResults = (test_instance_id) => (dispatch, getState) => {
  axios
    .get(`/api/exams/${test_instance_id}/results/`, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: FETCH_TEST_RESULTS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: FETCH_TEST_RESULTS_FAIL });
    });
};

// Action to get total study time
export const fetchTotalStudyTime = () => (dispatch, getState) => {
  axios
    .get("/api/quiz/exams/total-study-time/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: FETCH_TOTAL_STUDY_TIME_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: FETCH_TOTAL_STUDY_TIME_FAIL });
    });
};