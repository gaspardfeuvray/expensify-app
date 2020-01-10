import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {  
  return (
    <div>
      <ExpenseForm
        expense={props.getExpenseById(props.match.params.id)}
        onSubmit={(expense) => {
          props.editExpense({id: props.match.params.id, ...expense});
          props.history.push('/');
        }}
      />
      <button 
        onClick={props.removeExpense}>
        Delete Expense
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getExpenseById: (id) => state.expenses.find((expense) => expense.id === id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  editExpense: (expense) => { 
    dispatch(editExpense({ id: expense.id, overwrite: expense }));
    ownProps.history.push('/');
  },
  removeExpense: () => {
    dispatch(removeExpense(ownProps.match.params.id));
    ownProps.history.push('/');;
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);