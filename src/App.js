import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Header from './components/header/Header';
import GalleryPage from './pages/GalleryPage';
import CameraPage from './pages/CameraPage';

// Global Styles
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route exact path='/' element={<CameraPage />}></Route>
          <Route exact path='/gallery' element={<GalleryPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
