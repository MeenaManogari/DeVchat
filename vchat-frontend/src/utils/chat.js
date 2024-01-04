import store from "../store/store";
import { setMessages } from "../store/actions/chatActions";

export const updateDirectChatHistoryIfActive = (data) => {
  const { participants, messages } = data;

  //find id of user from token and id from active conversation
  const receiverUserId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails._id;

  if (receiverUserId && userId) {
    const usersInConversation = [receiverUserId, userId];

    updateChatHistoryIfSomeConversationActive({
      participants,
      usersInConversation,
      messages,
    });
  }
};

const updateChatHistoryIfSomeConversationActive = ({
  participants,
  usersInConversation,
  messages,
}) => {
  const result = participants.every(function (participantId) {
    return usersInConversation.includes(participantId);
  });

  if (result) {
    store.dispatch(setMessages(messages));
  }
};
