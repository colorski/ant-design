import moment from 'moment'

export const momentDays = (d) => moment().subtract(d, 'days').format('YYYY-MM-DD'); //2018-12-25
export const momnetDaysAndTimes = (d) => moment().subtract(d, 'days').format('YYYY-MM-DD HH:mm:ss');//2018-12-25 23:23:45

export const momnetDay = (d) => moment().subtract(d, 'days').format('MM月DD日'); //12月25日
