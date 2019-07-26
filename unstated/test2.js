import _ from 'lodash';

const data = [
  {
    schedule: 2,
    test: 1
  },
  {
    schedule: 1,
    test: 2
  },
  {
    schedule: 2,
    test: 3
  },
  {
    schedule: 3,
    test: 4
  },
  {
    schedule: 3,
    test: 5
  }
];

// console.log(
//   _.mapValues(_.groupBy(data, 'schedule'),
//     clist => clist.map(data => _.omit(data, 'make')))
// );

const result = _.groupBy(data, 'schedule');

const newData = Object.keys(result).map(key => ({
  schedule: key,
  data: result[key]
}));

console.log(newData);
