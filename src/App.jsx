import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './createTheme.css';
import StoreProvider from './store';
import MainPage from './pages/Main';

const App = () => {
	return (
		<StoreProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />

				<MainPage />
			</ThemeProvider>
		</StoreProvider>
	);
};

export default App;
