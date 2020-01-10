import moment from 'moment';

// prettier-ignore
export default ({expenses, filters: {text, sortBy, startDate, endDate}}) => (
  [...expenses]
  .filter(expense => (expense.description.toUpperCase().includes(text.toUpperCase()))
    && ( !moment.isMoment(startDate) || expense.createdAt.isSameOrAfter(startDate))
    && ( !moment.isMoment(endDate) || expense.createdAt.isSameOrBefore(endDate))
  )
  .sort((a, b) => sortBy === 'date' ? a.createdAt - b.createdAt : b.amount - a.amount)
);
