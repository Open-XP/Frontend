import {
  USER_LOADING,
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
  FETCH_ALL_SUBJECTS_FAIL,
  FETCH_ALL_SUBJECTS_SUCCESS,
} from "../Actions/Types";

const initialState = {
  testInstances: [],
  completedTests: [],
  allTests: [],
  individualQuestion: {},
  userScores: {},
  totalStudyTime: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case START_TEST_SUCCESS:
      return {
        ...state,
        testInstances: [...state.testInstances, action.payload],
        loading: false,
      };
    case START_TEST_FAIL:
    case SUBMIT_ANSWER_FAIL:
    case COMPLETE_TEST_FAIL:
    case FETCH_COMPLETED_TESTS_FAIL:
    case FETCH_ALL_TEST_INSTANCES_FAIL:
    case RETRIEVE_INDIVIDUAL_QUESTION_FAIL:
    case FETCH_USER_SCORE_FAIL:
    case FETCH_TEST_RESULTS_FAIL:
    case FETCH_TOTAL_STUDY_TIME_FAIL:
    case FETCH_ALL_SUBJECTS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SUBMIT_ANSWER_SUCCESS:
      return {
        ...state,
        individualQuestion: {
          ...state.individualQuestion,
          [action.payload.question_id]: action.payload,
        },
        loading: false,
      };
    case COMPLETE_TEST_SUCCESS:
      return {
        ...state,
        testInstances: state.testInstances.map((test) =>
          test.id === action.payload.id ? action.payload : test
        ),
        loading: false,
      };
    case FETCH_COMPLETED_TESTS_SUCCESS:
      return {
        ...state,
        completedTests: action.payload,
        loading: false,
      };
    case FETCH_ALL_TEST_INSTANCES_SUCCESS:
      return {
        ...state,
        allTests: action.payload,
        loading: false,
      };
    case RETRIEVE_INDIVIDUAL_QUESTION_SUCCESS:
      return {
        ...state,
        individualQuestion: {
          ...state.individualQuestion,
          [action.payload.id]: action.payload,
        },
        loading: false,
      };
    case FETCH_USER_SCORE_SUCCESS:
      return {
        ...state,
        userScores: {
          ...state.userScores,
          [action.payload.test_instance_id]: action.payload,
        },
        loading: false,
      };
    case FETCH_TEST_RESULTS_SUCCESS:
      return {
        ...state,
        userScores: {
          ...state.userScores,
          [action.payload.test_instance_id]: {
            ...state.userScores[action.payload.test_instance_id],
            results: action.payload,
          },
        },
        loading: false,
      };
    case FETCH_TOTAL_STUDY_TIME_SUCCESS:
      return {
        ...state,
        totalStudyTime: action.payload,
        loading: false,
      };
    case FETCH_ALL_SUBJECTS_SUCCESS:
      return {
        ...state,
        subjects: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
