import moment from 'moment';
import supermemo from 'supermemo2';

const now = new moment(new Date());
const next = new moment(new Date()).add(4, 'd');

console.log(now);
console.log(next);

// init deck
const initDate = new Date('2019-07-01');

// simulasi data
let hapalan1 = { memo: supermemo(), lastDateReview: initDate };

console.log(hapalan1, 'hapalan1');

// review pertama
hapalan1 = {
  memo: supermemo(4, hapalan1.memo.schedule, hapalan1.memo.factor),
  lastDateReview: new Date('2019-07-01')
};

console.log(hapalan1, 'review hapalan1');

// review pertama
hapalan1 = {
  memo: supermemo(4, hapalan1.memo.schedule, hapalan1.memo.factor),
  lastDateReview: new Date('2019-07-07')
};

console.log(hapalan1, 'review hapalan1');

// kondisi pas n

// cek apakah tanggal kadarluasa
// terakhir review  < nextDuDate

// definisikan data;
const tglSekarang = new moment('2019-02-27');
const terakhirReview = new moment('2019-02-20');
const nextReview = new moment('2019-02-24');

// Due Date === nextDueDate
if (
  nextReview.isSameOrBefore(tglSekarang, 'day') &&
  nextReview.isAfter(terakhirReview, 'day')
) {
  console.log('sama');
} // kondisi lastreview < nextDuedate

// & nextDueDate === toDay

const isScheduleNow = (tglSekarang, terakhirReview, nextReview) => {
  // inputan moment
  return (
    nextReview.isSameOrBefore(tglSekarang, 'day') &&
    nextReview.isAfter(terakhirReview, 'day')
  );
};

console.log(isScheduleNow(tglSekarang, terakhirReview, nextReview));

const date = new Date('2019-01-01');
const jadwal = 5;

const tanggalDeck = new moment(date);
const schedule = new moment(date).add(jadwal, 'd');

console.log(tanggalDeck);
console.log(schedule);

const schduleToDate = (schedule, initDate) => {
  // initDate object date
  // schedule int
  return new moment(initDate).add(schedule - 1, 'd');
};

console.log(schduleToDate(jadwal, date));
