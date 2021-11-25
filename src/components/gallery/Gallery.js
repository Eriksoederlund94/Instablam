import React, { useContext } from 'react';

// Styled Components
import styled from 'styled-components';

// Componetents
import PictureCard from './PictureCard';

// Context
import { UiContext } from '../../context/UiState';

function Gallery() {
  const { state } = useContext(UiContext);
  const galleryImages = state.defaultPhoto;
  let userPhotos = state.savedPhotos;

  return (
    <GalleryWrapper>
      {galleryImages.map((item, i) => {
        return (
          <PictureCard
            key={i}
            picture={item.imgSrc}
            city={item.city}
            country={item.country}
            date={item.date}
            id={item.id}
          />
        );
      })}

      {state.savedPhotos.length >= 1
        ? userPhotos.map((item, i) => {
            return (
              <PictureCard
                key={i}
                picture={item.src}
                city={item.city}
                country={item.country}
                date={item.date}
                id={item.id}
              />
            );
          })
        : null}
    </GalleryWrapper>
  );
}

const GalleryWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 4.5rem;
  grid-auto-rows: 20rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-bottom: 5rem;
  margin-top: 5rem;
`;

export default Gallery;
