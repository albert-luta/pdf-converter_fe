import React, { Component, createContext, useContext } from 'react';
import axios from 'axios';

const API = 'whatever';
axios.defaults.baseURL = API;
// axios.defaults.headers.common["Content-Type"] = "application/json";

const Context = createContext({});
const { Provider } = Context;

export const useStore = () => useContext(Context);

export default class StoreProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// In case we need axios in a component(is not abstractized in provider)
			axios,
			exampleField: 'example',
			exampleFn: this.exampleFn
		};
	}

	exampleFn = () => {
		console.log('this is just an example');
	};

	render() {
		return <Provider value={this.state}>{this.props.children}</Provider>;
	}
}
