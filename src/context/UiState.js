import React, { createContext, useReducer } from 'react';
import { UiReducer } from '../reducers/UiReducer';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';

export const UiContext = createContext();

const initialState = {
  photo: null,
  videoStream: null,
  canvas: false,
  savedPhotos: [],
  defaultPhoto: [
    {
      id: 1,
      imgSrc: img1,
      city: 'Ängelholm',
      country: 'Sweden',
      date: '2020-05-29',
    },
    {
      id: 2,
      imgSrc: img2,
      city: 'Stockholm',
      country: 'Sweden',
      date: '2021-03-11',
    },
    {
      id: 3,
      imgSrc: img3,
      city: 'Tjörn',
      country: 'Sweden',
      date: '2020-02-05',
    },
    {
      id: 4,
      imgSrc: img4,
      city: 'Landvetter',
      country: 'Sweden',
      date: '2019-01-16',
    },
    {
      id: 5,
      imgSrc: img5,
      city: 'Högvålen',
      country: 'Sweden',
      date: '2017-12-24',
    },
    {
      id: 6,
      imgSrc: img6,
      city: 'Warszawa',
      country: 'Poland',
      date: '2021-11-05',
    },
  ],
};

function UiState({ children }) {
  const [state, dispatch] = useReducer(UiReducer, initialState);

  return <UiContext.Provider value={{ state, dispatch }}>{children}</UiContext.Provider>;
}

export default UiState;
