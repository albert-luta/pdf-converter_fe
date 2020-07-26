import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './createTheme.css';
import StoreProvider from './store';

const App = () => {
	return (
		<StoreProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />

				{null?.ceva ?? <h1>App</h1>}
			</ThemeProvider>
		</StoreProvider>
	);
};

export default App;
