import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('Should generate set start date action object', () => {
  const date = moment('2018-02-26');
  expect(setStartDate(date)).toEqual({
    type: 'SET_START_DATE',
    startDate: date
  })
});

test('Should generate set end date action object', () => {
  const date = moment('2018-06-26');
  expect(setEndDate(date)).toEqual({
    type: 'SET_END_DATE',
    endDate: date
  })
});

test('Should generate set text filter action object', () => {
  const text = 'Coff';
  expect(setTextFilter(text)).toEqual({
    type: 'SET_TEXT',
    text
  })
});

test('Should generate set text filter action object with default', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT',
    text: ''
  })
});