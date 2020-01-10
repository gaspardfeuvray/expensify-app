import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from "react-dates";
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../actions/filters';
import { v1 as uuid } from 'uuid';

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {calendarFocused: null}
  }

  render = () => {
    const {filters, onChangeTextFilter, sortByDate, sortByAmount} = this.props;
    return (
      <div>
        Sort by <button onClick={sortByDate}>Date</button> <button onClick={sortByAmount}>Amount</button>
        <input type='text' value={filters.text} onChange={onChangeTextFilter}/>
        <DateRangePicker
          startDate={filters.startDate} // momentPropTypes.momentObj or null,
          startDateId={uuid()} // PropTypes.string.isRequired,
          endDate={filters.endDate} // momentPropTypes.momentObj or null,
          endDateId={uuid()} // PropTypes.string.isRequired,
          onDatesChange={this.props.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={calendarFocused => this.setState({ calendarFocused })} // PropTypes.func.isRequired,
          numberOfMonths={2}
          showClearDates={true}
          isOutsideRange={() => false}
        />
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

const dispatchToProps = (dispatch) => ({
  onChangeTextFilter: (e) => dispatch(setTextFilter(e.target.value)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  onDatesChange: ({startDate, endDate}) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  }
});

export default connect(mapStateToProps, dispatchToProps)(ExpenseListFilters);