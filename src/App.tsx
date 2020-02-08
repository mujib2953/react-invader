import React from 'react';
import { Provider } from "react-redux";

import { store } from "./store/store";

import Add from "./components/Add";
import View from "./components/View";

const App = () => {
	return (
		<Provider
			store={ store }
		>
			<Add />
			<View />
		</Provider>
	);
}

export default App;
