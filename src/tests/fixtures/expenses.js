import moment from 'moment';

export default [
	{
		id: '1',
		description: 'Coffee',
		amount: 2,
		startDate: 40,
		createdAt: moment('2020-02-14', 'YYYY-MM-DD')
	},
	{
		id: '2',
		description: 'Rent february',
		amount: 805,
		createdAt: moment('2020-02', 'YYYY-MM')
	},
	{
		id: '3',
		description: 'Rent january',
		amount: 400,
		createdAt: moment('2020-01', 'YYYY-MM')
	},
	{
		id: '4',
		description: 'Rent april',
		amount: 100,
		createdAt: moment('2020-04', 'YYYY-MM')
	},
	{
		id: '5',
		description: 'Rent march',
		amount: 1200,
		createdAt: moment('2020-03', 'YYYY-MM')
	}
];
