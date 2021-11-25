import React from 'react';
import Camera from '../components/camera/Camera';
import styled from 'styled-components';

function CameraPage() {
  return (
    <CameraPageWrapper>
      <Camera />
    </CameraPageWrapper>
  );
}

const CameraPageWrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default CameraPage;
