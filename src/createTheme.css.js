import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const theme = {
	colors: {
		blue: '#163f77',
		red: '#d0124d',

		almostBlack: '#1a1a1a',
		almostWhite: '#f6f6f6',

		gray1: '#414141',
		gray2: '#636363',
		gray3: '#828282',
		gray4: '#f7f7f7'
	},
	breakpoints: {
		xs: '360px',
		sm: '576px',
		md: '768px',
		lg: '992px',
		xl: '1200px'
	},
	font: '"Roboto", sans-serif',
	transitionTimes: {
		slow: '0.5s',
		normal: '0.25s',
		fast: '0.15s'
	}
};

export const GlobalStyle = createGlobalStyle`
	${reset};

	@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	:root {
		line-height: 1.4;
		font-family: ${theme.font};
	
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	
		color: ${theme.colors.almostBlack};
		background: ${theme.colors.almostWhite};
	}

	h1,
	h2,
	h3,
	h4,
	label,
	button {
		font-weight: 500;
	}

	label,
	button {
		cursor: pointer;
		user-select: none;
	}

	p {
		color: ${theme.colors.gray1};
	}
	h1 {
		font-size: 2.5rem;
	}
	h2 {
		font-size: 1.85rem;
	}
	h3 {
		font-size: 1.5rem;
	}
	h4 {
		font-size: 1.3rem;
	}
	h5,
	small {
		font-size: 0.85rem;
	}
	h6 {
		font-size: 0.7rem;
	}

	button {
		font-size: 1rem;
		background: transparent;
		padding: 0;
		border: none;
		display: block;
		width: 100%;
	}
`;
