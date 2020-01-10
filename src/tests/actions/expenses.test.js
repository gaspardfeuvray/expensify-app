import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import moment from 'moment';

test('Should setup REMOVE_EXPENSE action object', () => {
	const action = removeExpense('785236787');

	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '785236787'
	});
});

test('Should setup ADD_EXPENSE action object', () => {
	const expenseData = {
		description: 'Rent jan',
		note: 'Paid late',
		amount: 750,
		createdAt: moment('1995-01-25', 'YYYY-MM-DD')
	};
	const action = addExpense(expenseData);
	const expectedAction = {
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			...expenseData
		}
	};

	expect(action).toMatchObject(expectedAction);
	expect(typeof action.expense.id).toBe('string');
	expect(moment.isMoment(action.expense.createdAt)).toBeTruthy();
});

test('Should setup EDIT_EXPENSE action object', () => {
	const editData = {
		id: '3784693847934',
		overwrite: {
			amount: 850,
			createdAt: moment('1995-01-29', 'YYYY-MM-DD')
		}
	};
	const action = editExpense(editData);
	const expectedAction = {
		type: 'EDIT_EXPENSE',
		...editData
	};

	expect(action).toMatchObject(expectedAction);
	expect(moment.isMoment(action.overwrite.createdAt)).toBeTruthy();
});
