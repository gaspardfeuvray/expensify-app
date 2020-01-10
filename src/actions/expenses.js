import { v1 as uuid } from 'uuid';

export const addExpense = ({ description='', note='', amount=0, createdAt=0 }) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

export const editExpense = ({ id, overwrite: {description=undefined, note=undefined, amount=undefined, createdAt=undefined} }) => 
{
return ({
  type: 'EDIT_EXPENSE',
  id: id,
  overwrite: {
    ...(description ? { description } : {}),
    ...(note        ? { note }        : {}),
    ...(amount      ? { amount }      : {}),
    ...(createdAt   ? { createdAt }   : {})
  }
})};