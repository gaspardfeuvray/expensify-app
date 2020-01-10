import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

const sortCopyById = array => array.concat().sort((a, b) => a.id > b.id);

test('Should filter by text value', () => {
	const result = selectExpenses({ expenses, filters: { text: 'rent' } });

	expect(new Set(result)).toEqual(new Set(expenses.slice(1, 5)));
});

test('Should filter by start date', () => {
	const result = selectExpenses({
		expenses,
		filters: { text: '', startDate: moment('2020-02-15', 'YYYY-MM-DD') }
	});

	expect(new Set(result)).toEqual(new Set(expenses.slice(3, 5)));
});

test('Should filter by end date', () => {
	const result = selectExpenses({
		expenses,
		filters: { text: '', endDate: moment('2020-02-15', 'YYYY-MM-DD') }
	});

	expect(new Set(result)).toEqual(new Set(expenses.slice(0, 3)));
});

test('Should sort by date', () => {
	const result = selectExpenses({
		expenses,
		filters: { text: '', sortBy: 'date' }
	});

	expect(result).toEqual([
		expenses[2],
		expenses[1],
		expenses[0],
		expenses[4],
		expenses[3]
	]);
});

test('Should sort by amount', () => {
	const result = selectExpenses({
		expenses,
		filters: { text: '', sortBy: 'amount' }
	});

	expect(result).toEqual([
		expenses[4],
		expenses[1],
		expenses[2],
		expenses[3],
		expenses[0]
	]);
});
