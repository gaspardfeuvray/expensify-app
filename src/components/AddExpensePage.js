import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
  <div>
    This is from AddExpensePage component
    <ExpenseForm
      onSubmit={(expense) => {
        props.addExpense(expense);
        props.history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);