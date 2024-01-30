import {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStream,
  setRemoteStreams,
  setScreenSharingStream,
  setIsUserJoinedOnlyWithAudio,
} from "../store/actions/roomActions";
import store from "../store/store";
import * as socketConnection from "./socketConnection";
import * as webRTCHandler from "./webRTCHandler";

export const createNewRoom = () => {
  const successCallbackFunc = () => {
    store.dispatch(setOpenRoom(true, true));

    const audioOnly = store.getState().room.audioOnly;
    store.dispatch(setIsUserJoinedOnlyWithAudio(audioOnly));
    socketConnection.createNewRoom();
  };
  const audioOnly = store.getState().room.audioOnly;
  webRTCHandler.getLocalStreamPreview(audioOnly, successCallbackFunc);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;

  const friends = store.getState().friends.friends;
  const rooms = [];

  const userId = store.getState().auth.userDetails?._id;

  activeRooms.forEach((room) => {
    const isRoomCreatedByMe = room.roomCreator.userId === userId;

    if (isRoomCreatedByMe) {
      rooms.push({ ...room, creatorUsername: "Me" });
    } else {
      friends.forEach((f) => {
        if (f.id === room.roomCreator.userId) {
          rooms.push({ ...room, creatorUsername: f.username });
        }
      });
    }
  });

  store.dispatch(setActiveRooms(rooms));
};

export const joinRoom = (roomId) => {
  const successCallbackFunc = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom(false, true));

    const audioOnly = store.getState().room.audioOnly;
    store.dispatch(setIsUserJoinedOnlyWithAudio(audioOnly));
    socketConnection.joinRoom({ roomId });
  };
  const audioOnly = store.getState().room.audioOnly;
  webRTCHandler.getLocalStreamPreview(audioOnly, successCallbackFunc);
};

export const leaveRoom = () => {
  const roomId = store.getState().room.roomDetails.roomId;

  //To stop the stream
  const localStream = store.getState().room.localStream;

  if (localStream) {
    localStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setLocalStream(null));
  }

  const screenSharingStream = store.getState().room.screenSharingStream;
  if (screenSharingStream) {
    screenSharingStream.getTracks().forEach((track) => track.stop());
    store.dispatch(setScreenSharingStream(null));
  }
  store.dispatch(setRemoteStreams([]));
  webRTCHandler.closeAllConnections();

  socketConnection.leaveRoom({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(setOpenRoom(false, false));
};

// export const leaveRoom = () => {
//   const currentState = store.getState();
//   const roomId = currentState.room.roomDetails.roomId;
//   const localStream = currentState.room.localStream;

//   if (localStream) {
//     localStream.getTracks().forEach((track) => track.stop());

//     // Create a new state object without modifying the original one
//     const updatedState = {
//       ...currentState,
//       room: { ...currentState.room, localStream: null },
//     };

//     store.dispatch(setLocalStream(updatedState.room.localStream));
//   }

//   const screenSharingStream = store.getState().room.screenSharingStream;
//   if(screenSharingStream){
//     screenSharingStream.getTracks().forEach((track)=>track.stop());
//     store.dispatch(setScreenSharingStream(null))
//   }
//   store.dispatch(setRemoteStreams([]));
//   webRTCHandler.closeAllConnections();

//   socketConnection.leaveRoom({ roomId });
//   store.dispatch(setRoomDetails(null));
//   store.dispatch(setOpenRoom(false, false));
// };
