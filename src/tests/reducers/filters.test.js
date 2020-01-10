import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should set up default filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('Should set sortBy to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
	const currentState = {
		expenses: undefined,
		filters: { sortBy: 'amount' }
	};
	const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
	expect(state.sortBy).toBe('date');
});
