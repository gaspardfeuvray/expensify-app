import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configure';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(
	addExpense({
		description: 'Rent february',
		amount: 805,
		createdAt: moment('2020-02', 'YYYY-MM')
	})
);
store.dispatch(
	addExpense({
		description: 'Coffee',
		amount: 2,
		startDate: 400,
		createdAt: moment('2020-02-14', 'YYYY-MM-DD')
	})
);
store.dispatch(
	addExpense({
		description: 'Rent january',
		amount: 400,
		createdAt: moment('2020-01', 'YYYY-MM')
	})
);
store.dispatch(
	addExpense({
		description: 'Rent april',
		amount: 100,
		createdAt: moment('2020-04', 'YYYY-MM')
	})
);
store.dispatch(
	addExpense({
		description: 'Rent march',
		amount: 1200,
		createdAt: moment('2020-03', 'YYYY-MM')
	})
);

// const unsuscribe = store.subscribe(() => {
//   console.log(store.getState());
// })

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
