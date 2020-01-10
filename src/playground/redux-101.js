import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
  });

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const setCount = ({ value } = {}) => ({
  type: 'SET',
  set: value
});

const resetCount = () => ({
  type: 'RESET',
  incrementBy: 0
});

// Reducers are pure functions
// Never change state or action

const countReducer =  ((state = { count: 0 }, action) => {
  console.log('running');
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy }
    case 'DECREMENT':
      return { count: state.count - action.decrementBy }
    case 'SET' :
      return { count: action.set }
    case 'RESET':
      return { count: 0 }
    default:
      return state;
  }
});

const store = createStore(countReducer);

const unsuscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 4}));
store.dispatch(decrementCount({decrementBy: 2}));
store.dispatch(resetCount());
store.dispatch(setCount({value: 2}));


unsuscribe();
