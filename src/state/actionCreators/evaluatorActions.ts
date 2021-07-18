import evaluatorApi from "../../api/evaluator";
import { EvaluatorTypes } from "../actionTypes";

export const evaluateText = (text: string) => async (dispatch: any) => {
  dispatch({ type: EvaluatorTypes.EVALUATE_TEXT_PENDING });
  try {
    const response = await evaluatorApi.post("/evalutor", { text });
    dispatch({
      type: EvaluatorTypes.EVALUATE_TEXT_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    const error = e?.response?.data?.message || "Something went wrong";
    dispatch({ type: EvaluatorTypes.EVALUATE_TEXT_ERROR, payload: error });
  }
};
