import React from 'react';
import Gallery from '../components/gallery/Gallery';
import styled from 'styled-components';

function GalleryPage() {
  return (
    <GalleryPageWrapper>
      <Gallery />
    </GalleryPageWrapper>
  );
}

const GalleryPageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export default GalleryPage;
