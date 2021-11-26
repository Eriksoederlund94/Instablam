import React, { useRef, useEffect, useState, useContext } from 'react';

// Styled Component
import styled from 'styled-components';

// Reducer and Context
import { UiContext } from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';

// Components
import CapturePhotoBtn from './CapturePhotoBtn';
import ClosePhotoBtn from './ClosePhotoBtn';
import SavePhotoBtn from './SavePhotoBtn';

// Icons
import { AiFillCamera } from 'react-icons/ai';
import { RiCameraOffFill } from 'react-icons/ri';

// Helpers
import { cameraOff } from '../../helpers/cameraHelpers';

function Camera() {
  const [canUseMd, setCanUseMd] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [cameraIsOn, setCameraIsOn] = useState(false);
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const { state, dispatch } = useContext(UiContext);
  let canvasState = state.canvas;

  async function cameraOn(videoElement, showMessage, whenDone) {
    const width = 350;
    const height = 400;
    const constraints = {
      video: { facingMode: 'user', width: width, height: height },
    };

    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoElement.srcObject = stream;

      if (stream) {
        dispatch({
          type: UI_STATE_ACTIONS.SET_VIDEO_STREAM,
          payload: { videoStream: stream },
        });
      }
      videoElement.addEventListener('loadedmetadata', () => {
        videoElement.play();
        whenDone();
      });
    } catch (error) {
      console.log('Could not use camera: ', error.message);
      showMessage('You have to give premission to use the camera.');
    }
  }

  const handleCameraToggle = () => {
    if (cameraIsOn) {
      cameraOff(videoRef.current, () => setCameraIsOn(false));
    } else {
      cameraOn(videoRef.current, setStatusMessage, () => setCameraIsOn(true));
    }
  };

  useEffect(() => {
    setCanUseMd('mediaDevices' in navigator);
  }, []);

  return (
    <CameraWrapper>
      <div className='camera'>
        <p> {statusMessage} </p>
        {canUseMd ? <video ref={videoRef}></video> : null}
        <div className='btn-container'>
          <button onClick={handleCameraToggle}>{cameraIsOn ? <RiCameraOffFill /> : <AiFillCamera />}</button>
          {cameraIsOn ? <CapturePhotoBtn photoRef={photoRef} videoRef={videoRef} /> : null}
        </div>
        <canvas ref={photoRef}></canvas>
        <div className='btn-container'>
          {canvasState ? <SavePhotoBtn /> : null}
          {canvasState ? <ClosePhotoBtn photoRef={photoRef} /> : null}
        </div>
      </div>
    </CameraWrapper>
  );
}

const CameraWrapper = styled.div`
  font-size: 10px;

  .camera,
  .photo-result {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
  }

  .btn-container {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
  }

  button {
    appearance: none;
    background-color: rgb(65, 65, 65);
    border: 3px solid #1a1a1a;
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
    will-change: transform;
    font-size: 1.4rem;
  }

  button:disabled {
    pointer-events: none;
  }

  button:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 2px 2px;
    transform: translateY(-2px);
    color: #8e9eab;
  }

  button:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export default Camera;
