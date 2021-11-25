export const UI_STATE_ACTIONS = {
  SET_DEFAULT_PHOTO: 'SET_DEFAULT_PHOTO',
  SET_TAKEN_PHOTO: ' SET_TAKEN_PHOTO',
  SET_SAVED_PHOTO: 'SET_SAVED_PHOTO',
  SET_VIDEO_STREAM: 'SET_VIDEO_STREAM',
  SET_CANVAS_VAR: 'SET_CANVAS_VAR',
};

export function UiReducer(state, action) {
  switch (action.type) {
    case UI_STATE_ACTIONS.SET_TAKEN_PHOTO:
      return {
        ...state,
        photo: action.payload.photo,
      };
    case UI_STATE_ACTIONS.SET_SAVED_PHOTO:
      return {
        ...state,
        savedPhotos: action.payload.savedPhotos,
      };
    case UI_STATE_ACTIONS.SET_VIDEO_STREAM:
      return {
        ...state,
        videoStream: action.payload.videoStream,
      };
    case UI_STATE_ACTIONS.SET_CANVAS_VAR:
      return {
        ...state,
        canvas: action.payload.canvas,
      };
    case UI_STATE_ACTIONS.SET_DEFAULT_PHOTO:
      return {
        ...state,
        defaultPhoto: action.payload.defaultPhoto,
      };

    default:
      return state;
  }
}
