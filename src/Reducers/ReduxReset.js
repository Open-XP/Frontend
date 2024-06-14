import RESET_STATE_ON_LEAVE_PAGE from "../Actions/Types";

const initialState = {
  resetStateOnLeavePage: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESET_STATE_ON_LEAVE_PAGE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
