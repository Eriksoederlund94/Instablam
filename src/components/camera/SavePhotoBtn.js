import React, { useContext } from 'react';

// Icons
import { AiFillSave } from 'react-icons/ai';

// Random ID with UUID
import { v4 as uuidv4 } from 'uuid';

// Context and Reducer
import { UiContext } from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';

function SavePhotoBtn() {
  const { state, dispatch } = useContext(UiContext);

  const savePhotoHandler = () => {
    let image = state.photo;

    let id = uuidv4();
    let date = new Date().toISOString().slice(0, 10);

    const userPhotoObject = {
      id: id,
      src: image,
      country: sessionStorage.getItem('country') || null,
      city: sessionStorage.getItem('city') || ` Location unknown`,
      date: date,
    };

    let savedPhotos = state.savedPhotos;

    dispatch({
      type: UI_STATE_ACTIONS.SET_SAVED_PHOTO,
      payload: { savedPhotos: [...savedPhotos, userPhotoObject] },
    });

    sessionStorage.clear();
  };

  return (
    <div>
      <button onClick={savePhotoHandler}>
        <AiFillSave />
      </button>
    </div>
  );
}

export default SavePhotoBtn;
