import React, { useContext } from 'react';

// Icons
import { AiOutlineClose } from 'react-icons/ai';

// Reducer and Context
import { UiContext } from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';

function ClosePhotoBtn({ photoRef }) {
  const { dispatch } = useContext(UiContext);

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');

    ctx.clearRect(0, 0, photo.width, photo.height);

    dispatch({
      type: UI_STATE_ACTIONS.SET_CANVAS_VAR,
      payload: { canvas: false },
    });
  };

  return (
    <div>
      <button onClick={closePhoto}>
        <AiOutlineClose />
      </button>
    </div>
  );
}

export default ClosePhotoBtn;
