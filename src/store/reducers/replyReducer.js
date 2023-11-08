const initialState = {
  reply: [],
};
export default function replyReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_ALL_REPLY":
      return {
        ...state,
        reply: action.payload,
      };
    default:
      return state;
  }
}
