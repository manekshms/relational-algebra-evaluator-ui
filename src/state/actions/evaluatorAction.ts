import { EvaluatorTypes } from "../actionTypes";
import { EvaluatedData } from "../types/Evaluator";

interface EvaluateTextSuccessAction {
  type: EvaluatorTypes.EVALUATE_TEXT_SUCCESS;
  payload: EvaluatedData;
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

interface GetSessionIdSuccessAction {
  type: EvaluatorTypes.GET_SESSION_ID_SUCCESS;
  payload: string;
}

interface GetSessionIdErrorAction {
  type: EvaluatorTypes.GET_SESSION_ID_ERROR;
  payload: string;
}

interface GetSessionIdPendingAction {
  type: EvaluatorTypes.GET_SESSION_ID_PENDING;
}

export type GetSessionIdAction =
  | GetSessionIdSuccessAction
  | GetSessionIdPendingAction
  | GetSessionIdErrorAction;

interface GetAllRelationsSuccessAction {
  type: EvaluatorTypes.GET_ALL_RELATIONS_SUCCESS;
  payload: string[];
}

interface GetAllRelationsPendingAction {
  type: EvaluatorTypes.GET_ALL_RELATIONS_PENDING;
}

interface GetAllRelationsErrorAction {
  type: EvaluatorTypes.GET_ALL_RELATIONS_ERROR;
  payload: string;
}

export type GetAllRelationsAction =
  | GetAllRelationsSuccessAction
  | GetAllRelationsPendingAction
  | GetAllRelationsErrorAction;

interface UploadRelationsSuccessAction {
  type: EvaluatorTypes.UPLOAD_RELATIONS_SUCCESS;
}

interface UploadRelationsPendingAction {
  type: EvaluatorTypes.UPLOAD_RELATIONS_PENDING;
}

interface UploadRelationsErrorAction {
  type: EvaluatorTypes.UPLOAD_RELATIONS_ERROR;
  payload: string;
}

export type UploadRelationsAction =
  | UploadRelationsSuccessAction
  | UploadRelationsPendingAction
  | UploadRelationsErrorAction;
