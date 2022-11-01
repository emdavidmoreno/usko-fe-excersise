import { ACTIONS } from "../utils/constants";
import { Action, InitialStateType } from "../utils/models";


const reducer =  (state: InitialStateType, action: Action) => {
  switch (action.type) {
    case ACTIONS.SELECT_PURCHASE:
      return {...state, selected: action.payload};
    case ACTIONS.CHANGE_PAGE:
      return {...state, page: action.payload};
    case ACTIONS.CHANGE_SORT_BY:
        return {...state, sortBy: action.payload};
    default:
      return {...state};
  }
}

export default reducer;