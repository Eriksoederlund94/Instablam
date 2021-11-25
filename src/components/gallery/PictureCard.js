import React, { useContext } from 'react';

// Styled Component
import styled from 'styled-components';

// Icons
import { BsFillTrashFill } from 'react-icons/bs';
import { FaFileDownload } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';

//Context
import { UiContext } from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';

function PictureCard({ picture, city, country, date, id }) {
  const { state, dispatch } = useContext(UiContext);

  const deleteHandler = () => {
    let photoId = id;
    let defaultArray = state.defaultPhoto;
    let userArray = state.savedPhotos;

    const deafaultPhotoFilter = defaultArray.filter((item) => item.id !== photoId);
    const userPhotoFilter = userArray.filter((item) => item.id !== photoId);

    dispatch({
      type: UI_STATE_ACTIONS.SET_DEFAULT_PHOTO,
      payload: { defaultPhoto: [...deafaultPhotoFilter] },
    });

    dispatch({
      type: UI_STATE_ACTIONS.SET_SAVED_PHOTO,
      payload: { savedPhotos: [...userPhotoFilter] },
    });
  };

  return (
    <PictureCardWrapper>
      <img src={picture} alt='' />
      <div className='gallery-info'>
        <FaGlobeAmericas />
        <div className='geo-info'>
          <p>
            {city} {country} {date}
          </p>
        </div>
        <div className='btn-container'>
          <a href={picture} download={picture}>
            <button>
              <FaFileDownload />
            </button>
          </a>
          <button onClick={deleteHandler}>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    </PictureCardWrapper>
  );
}

const PictureCardWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gallery-info {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 0rem;
    background-color: #8fb9c4;
  }

  .geo-info {
    display: flex;
    width: 65%;
    justify-content: space-evenly;

    p {
      font-size: 0.7rem;
    }
  }

  .btn-container {
    display: flex;
    justify-content: space-evenly;
    width: 20%;

    a {
      all: unset;
    }

    button {
      all: unset;
      cursor: pointer;
      font-size: 1.2rem;
    }

    button:hover {
      color: #eef2f3;
    }
  }
`;

export default PictureCard;
