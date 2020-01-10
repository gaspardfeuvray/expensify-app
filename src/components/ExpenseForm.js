import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const defaultFormState = {
	description: '',
	amount: '',
	note: '',
	createdAt: moment(),
	calendarFocused: false,
	error: '',
	submitText: 'Add Expense'
};

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...defaultFormState, ...props.expense };
		if (props.expense) {
			this.state.submitText = 'Save Expense';
		}
	}

	onDescriptionChange = e => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};

	onAmountChange = e => {
		const amount = e.target.value.toString();
		if (amount) {
			if (amount.match(/^[0]?([1-9][0-9]*)?(\.[0-9]?[0-9]?)?$/)) {
				this.setState(() => ({ amount: amount }));
			}
		} else {
			this.setState(() => ({ amount: '' }));
		}
	};

	onDateChange = createdAt => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};

	onNoteChange = e => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};

	onCalFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};

	onSubmit = e => {
		e.preventDefault();
		const amount = parseFloat(this.state.amount);

		if (this.state.description && this.state.amount && !isNaN(amount)) {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				description: this.state.description,
				amount: amount,
				createdAt: this.state.createdAt,
				note: this.state.note
			});
			this.resetForm();
		} else {
			this.setState(() => ({
				error: 'Please provide both description and amount'
			}));
		}
	};
	resetForm = () => {
		this.setState(() => ({
			description: '',
			amount: '',
			note: 'none',
			createdAt: moment(),
			calendarFocused: false,
			error: ''
		}));
	};

	render() {
		return (
			<div>
				{this.state.error ? this.state.error : undefined}
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						maxLength="30"
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						type="text"
						placeholder="Amount"
						maxLength="10"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<SingleDatePicker
						date={this.state.createdAt} // momentPropTypes.momentObj or null
						onDateChange={this.onDateChange} // PropTypes.func.isRequired
						focused={this.state.calendarFocused} // PropTypes.bool
						onFocusChange={this.onCalFocusChange} // PropTypes.func.isRequired
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					<textarea
						placeholder="Add a note (optionnal)"
						value={this.state.note}
						onChange={this.onNoteChange}
					/>
					<button>{this.state.submitText}</button>
				</form>
			</div>
		);
	}
}
