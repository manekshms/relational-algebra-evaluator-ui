import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import evaluatorApi from "../../api/evaluator";
import { EvaluatorTypes } from "../actionTypes";
import { RootState } from "../store";
import { EvaluatedData } from "../types/Evaluator";

export const evaluateText =
  (
    text: string
  ): ThunkAction<Promise<EvaluatedData>, RootState, unknown, AnyAction> =>
  async (dispatch: any): Promise<EvaluatedData> => {
    dispatch({ type: EvaluatorTypes.EVALUATE_TEXT_PENDING });
    try {
      const response = await evaluatorApi.post<EvaluatedData>("/evaluate/run", {
        text,
      });
      dispatch({
        type: EvaluatorTypes.EVALUATE_TEXT_SUCCESS,
        payload: response.data,
      });
      return response.data;
    } catch (e) {
      const error = e?.response?.data?.message || "Something went wrong";
      dispatch({ type: EvaluatorTypes.EVALUATE_TEXT_ERROR, payload: error });
      e.message = error;
      throw e;
    }
  };

export const getSessionId = () => async (dispatch: any) => {
  dispatch({ type: EvaluatorTypes.GET_SESSION_ID_PENDING });
  try {
    const resposne = await evaluatorApi.get("/evaluate/get-session-id");
    localStorage.setItem("sessionId", resposne.data.sessionId);
    dispatch({
      type: EvaluatorTypes.GET_SESSION_ID_SUCCESS,
      payload: resposne.data.sessionId,
    });
  } catch (e) {
    const error = e?.response?.data?.message || "Something went wrong";
    dispatch({ type: EvaluatorTypes.GET_SESSION_ID_ERROR, payload: error });
    throw e;
  }
};

export const getAllRelations = () => async (dispatch: any) => {
  dispatch({ type: EvaluatorTypes.GET_ALL_RELATIONS_PENDING });
  try {
    const resposne = await evaluatorApi.get("/evaluate/relations");
    dispatch({
      type: EvaluatorTypes.GET_ALL_RELATIONS_SUCCESS,
      payload: resposne.data.relations,
    });
  } catch (e) {
    const error = e?.response?.data?.message || "Something went wrong";
    dispatch({ type: EvaluatorTypes.GET_ALL_RELATIONS_ERROR, payload: error });
    throw e;
  }
};

export const uploadRelations = (data: FormData) => async (dispatch: any) => {
  dispatch({ type: EvaluatorTypes.UPLOAD_RELATIONS_PENDING });
  try {
    const resposne = await evaluatorApi.post("/evaluate/add-relations", data);
    dispatch({
      type: EvaluatorTypes.UPLOAD_RELATIONS_SUCCESS,
      payload: resposne.data.relations,
    });
    return true;
  } catch (e) {
    const error = e?.response?.data?.message || "Something went wrong";
    dispatch({ type: EvaluatorTypes.UPLOAD_RELATIONS_ERROR, payload: error });
    e.message = error;
    throw e;
  }
};
