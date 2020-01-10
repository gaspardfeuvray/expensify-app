import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import getVisibleExpenses from '../selectors/expenses.js';

export const ExpenseList = props => (
	<div>
		{props.expenses.length === 0 ? (
			<p>No expenses</p>
		) : (
			props.expenses.map(expense => (
				<ExpenseListItem key={expense.id} {...expense} />
			))
		)}
	</div>
);

const mapStateToProps = state => ({
	expenses: getVisibleExpenses(state),
	filters: state.filters
});

export default connect(mapStateToProps)(ExpenseList);
