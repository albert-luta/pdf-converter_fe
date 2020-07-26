import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './createTheme.css';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			{null?.ceva ?? <h1>App</h1>}
		</ThemeProvider>
	);
};

export default App;
