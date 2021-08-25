import { EvaluatorTypes } from "../actionTypes";
import {
  EvaluateTextAction,
  GetAllRelationsAction,
  GetSessionIdAction,
  UploadRelationsAction,
} from "../actions/evaluatorAction";

const evaluateTextInitialState = {
  loading: false,
  error: "",
  data: null,
};

export const evaluateText = (
  state = evaluateTextInitialState,
  action: EvaluateTextAction
) => {
  switch (action.type) {
    case EvaluatorTypes.EVALUATE_TEXT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case EvaluatorTypes.EVALUATE_TEXT_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case EvaluatorTypes.EVALUATE_TEXT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};

const getSessionIdInitialState = {
  data: localStorage.getItem("sessionId"),
  loading: false,
  error: null,
};

export const getSessionId = (
  state = getSessionIdInitialState,
  action: GetSessionIdAction
) => {
  switch (action.type) {
    case EvaluatorTypes.GET_SESSION_ID_SUCCESS:
      return {
        ...state,
        data: action.payload,
        pending: false,
        error: null,
      };
    case EvaluatorTypes.GET_SESSION_ID_PENDING:
      return {
        ...state,
        pending: true,
        data: null,
        error: null,
      };
    case EvaluatorTypes.GET_SESSION_ID_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const getAllRelationsInitialState = {
  data: [],
  loading: false,
  error: false,
};

export const getAllRelations = (
  state = getAllRelationsInitialState,
  action: GetAllRelationsAction
) => {
  switch (action.type) {
    case EvaluatorTypes.GET_ALL_RELATIONS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case EvaluatorTypes.GET_ALL_RELATIONS_PENDING:
      return {
        ...state,
        loading: true,
        data: [],
        error: null,
      };
    case EvaluatorTypes.GET_ALL_RELATIONS_ERROR:
      return {
        ...state,
        error: state.error,
        data: [],
        loading: false,
      };
    default:
      return state;
  }
};

const uploadRelationsInitialState = {
  loading: false,
  error: null,
};

export const uploadRelations = (
  state = uploadRelationsInitialState,
  action: UploadRelationsAction
) => {
  switch (action.type) {
    case EvaluatorTypes.UPLOAD_RELATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case EvaluatorTypes.UPLOAD_RELATIONS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case EvaluatorTypes.UPLOAD_RELATIONS_ERROR:
      return {
        ...state,
        error: state.error,
        loading: false,
      };
    default:
      return state;
  }
};
