import React, { useContext } from 'react';

// Reducer and Context
import { UiContext } from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';

//Icons
import { RiCameraLensFill } from 'react-icons/ri';

// Styled Component
import styled from 'styled-components';

//Hook
import useGeolocation from '../../hooks/useGeolocation';

// Helper
import { getLocationFromGeolocation } from '../../helpers/geoLocationHelpers';
import { takePhoto } from '../../helpers/cameraHelpers';

function CapturePhotoBtn({ videoRef, photoRef }) {
  const { dispatch } = useContext(UiContext);

  const geolocation = useGeolocation();

  const lat = geolocation.latitude;
  const long = geolocation.longitude;

  const capturePhotoBtnHandler = async () => {
    getLocationFromGeolocation(lat, long);
    const photo = await takePhoto(videoRef, photoRef);

    dispatch({
      type: UI_STATE_ACTIONS.SET_TAKEN_PHOTO,
      payload: { photo: photo },
    });

    dispatch({
      type: UI_STATE_ACTIONS.SET_CANVAS_VAR,
      payload: { canvas: true },
    });
  };

  return (
    <div>
      <CapturePhotoBtnWrapper onClick={capturePhotoBtnHandler}>
        <RiCameraLensFill />
      </CapturePhotoBtnWrapper>
    </div>
  );
}

const CapturePhotoBtnWrapper = styled.button`
  appearance: none;
  background-color: #000000;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;

  :disabled {
    pointer-events: none;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export default CapturePhotoBtn;
