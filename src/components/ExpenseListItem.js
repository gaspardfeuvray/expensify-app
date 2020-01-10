import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => {
  return (
    <div>
      <Link to={'/edit/' + id}>
        <h4>{description}</h4>
      </Link>
      {amount} Euros, Created on {createdAt.format('MMM Do YYYY')} 
    </div>
  )
};

export default ExpenseListItem;