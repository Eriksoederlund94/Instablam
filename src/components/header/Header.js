import React, { useContext } from 'react';

// Styled Component
import styled from 'styled-components';

//Logo
import logo from '../../images/instablam-logo.png';

//Reducer and Contex
import { UiContext } from '../../context/UiState';
import { UI_STATE_ACTIONS } from '../../reducers/UiReducer';

// React Router
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();
  const { dispatch } = useContext(UiContext);

  const galleryBtnHandler = () => {
    dispatch({
      type: UI_STATE_ACTIONS.SET_CANVAS_VAR,
      payload: { canvas: false },
    });
  };

  return (
    <HeaderTitleWrapper>
      <Link to='/'>
        <div className='logo-container'>
          <img src={logo} alt='Logo of Instablam' />
          <h1>Instablam</h1>
        </div>
      </Link>
      {pathname !== '/gallery' && (
        <Link to='/gallery'>
          <div className='gallery-btn-container'>
            <button onClick={galleryBtnHandler} className='header-btn'>
              Gallery
            </button>
          </div>
        </Link>
      )}
      {pathname !== '/' && (
        <Link to='/'>
          <div className='gallery-btn-container'>
            <button className='header-btn'>Camera</button>
          </div>
        </Link>
      )}
    </HeaderTitleWrapper>
  );
}

const HeaderTitleWrapper = styled.div`
  margin-top: 1rem;
  color: rgb(65, 65, 65);
  display: flex;
  justify-content: space-around;

  a {
    margin: 1rem;
    text-decoration: none;
    color: inherit;
  }

  .logo-container,
  .gallery-btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    h1 {
      font-size: 2rem;
      margin: 1rem;
      text-decoration: none;
    }
  }

  .header-btn {
    background: transparent;
    color: rgb(65, 65, 65);
    border: none;
    cursor: pointer;
    border: 3px solid rgb(65, 65, 65);
    border-radius: 0.5rem;
    padding: 0.5rem;
    transition: all 0.5s ease;
    font-weight: 600;

    &:hover {
      background: rgb(65, 65, 65);
      color: #8fb9c4;
    }
  }

  @media screen and (max-width: 450px) {
    .logo-container h1 {
      font-size: 1rem;
    }

    .logo-container img {
      width: 45px;
      height: 45px;
    }
  }
`;

export default Header;
