import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


*{
	margin: 0;
  padding: 0;
  box-sizing: border-box;
}


  body {
	background: #8e9eab; 
	background: -webkit-linear-gradient( to right, #eef2f3, #8e9eab); 
  background: linear-gradient( to right, #eef2f3, #8e9eab ); 
  font-family: 'Quando', serif;
  font-size: 16px;
	min-height: 100vh;

  }

  .App {
		height: 100vh;
		margin: 0 auto;
	}

	nav{
  text-align: center;
	min-height: 10vh;
	}

`;

export default GlobalStyle;
