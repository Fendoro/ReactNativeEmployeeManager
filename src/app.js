import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyDhA0MAHblG624VXrVH3HsVEnoqy6vcs6c',
			authDomain: 'manager-52b4c.firebaseapp.com',
			databaseURL: 'https://manager-52b4c.firebaseio.com',
			projectId: 'manager-52b4c',
			storageBucket: 'manager-52b4c.appspot.com',
			messagingSenderId: '721770243317'
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
