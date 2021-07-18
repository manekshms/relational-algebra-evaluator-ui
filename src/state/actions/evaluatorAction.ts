import { EvaluatorTypes } from "../actionTypes";

interface EvaluateTextSuccessAction {
  type: EvaluatorTypes.EVALUATE_TEXT_SUCCESS;
  payload: any;
}

interface EvaluateTextErrorAction {
  type: EvaluatorTypes.EVALUATE_TEXT_ERROR;
  payload: string;
}

interface EvaluateTextPendingAction {
  type: EvaluatorTypes.EVALUATE_TEXT_PENDING;
}

export type EvaluateTextAction =
  | EvaluateTextSuccessAction
  | EvaluateTextPendingAction
  | EvaluateTextErrorAction;
