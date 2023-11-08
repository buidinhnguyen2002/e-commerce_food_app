export function saveAllReply({ reply }) {
  return {
    type: "SAVE_ALL_REPLY",
    payload: reply,
  };
}
