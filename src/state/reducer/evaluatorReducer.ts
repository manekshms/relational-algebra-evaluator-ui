import { EvaluatorTypes } from "../actionTypes";
import { EvaluateTextAction } from "../actions/evaluatorAction";

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
  }
};
