import { createStore, combineReducers } from 'redux';
import { v1 as uuid } from 'uuid';

/*
add expense
rm expense
edit expense
set text filter
sort by date
sort by amount
set start date
set end date
*/

///// Expense reducer /////

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      console.log('Adding expense');
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      console.log(`Removing expense with uuid ${action.id}`)
      return state.filter(expense => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => expense.id === action.id ? {...expense, ...action.overwrite} : expense);        
    default:
      return state;
  }
};

const addExpense = ({ description='', note='', amount=0, createdAt=0 }) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

const editExpense = ({ id, overwrite: {description=undefined, note=undefined, amount=undefined} }) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  overwrite: {
    ...(description ? { description } : {}),
    ...(note        ? { note }        : {}),
    ...(amount      ? { amount }      : {})
  }
});

///// Filers reducer /////

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {...state, text: action.text};
    case 'SORT_BY_DATE':
      return {...state, sortBy: 'date'};
    case 'SORT_BY_AMOUNT':
      return {...state, sortBy: 'amount'};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    default:
      return state;
  }
};

const setTextFilter = (text='') => ({
  type: 'SET_TEXT',
  text: text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate: startDate
});

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate: endDate
});

//// Program /////

const store = createStore(
  combineReducers({
    expenses: expensesReducer, 
    filters: filtersReducer
  })
);

store.subscribe(() => {
  //console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent february', amount: 805, createdAt: 200 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 2, startDate: 400}));
const expenseThree = store.dispatch(addExpense({ description: 'Rent january', amount: 400, createdAt: 100}));
const expenseFour = store.dispatch(addExpense({ description: 'Rent april', amount: 100, createdAt: 400}));
const expenseFive = store.dispatch(addExpense({ description: 'Rent march', amount: 1200, createdAt: 300}));

// store.dispatch(editExpense({ id: expenseOne.expense.id, overwrite: { amount:387 } }));

// const {type, text} = obj;
// console.log(type, text);

store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
store.dispatch(setStartDate(50));
store.dispatch(setEndDate(600));

const getVisibleExpenses = ({expenses, filters: {text, sortBy, startDate, endDate}}) => (
  [...expenses]
  .filter(expense => (expense.description.toUpperCase().includes(text.toUpperCase()))
    && (typeof startDate !== 'number' || expense.createdAt >= startDate)
    && (typeof endDate !== 'number' || expense.createdAt <= endDate)
  )
  .sort((a, b) => sortBy === 'date' ? a.createdAt - b.createdAt : b.amount - a.amount)
);


console.log(getVisibleExpenses(store.getState()));

const demoState = {
  expenses: [{
    id: 0,
    description: 0,
    note: 0,
    amount: 60,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date', // amount
    startDate: undefined,
    endDate: undefined
  }
};

console.log(store.getState());