import moment from 'moment';

export const isScheduleNow = (tglSekarang, terakhirReview, nextReview) => {
  // inputan moment
  return (
    nextReview.isSameOrBefore(tglSekarang, 'day') &&
    nextReview.isAfter(terakhirReview, 'day')
  );
};

export const schduleToDate = (schedule, initDate) => {
  // initDate object date
  // schedule int
  return new moment(initDate).add(schedule - 1, 'd');
};
