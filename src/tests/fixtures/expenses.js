import moment from 'moment';
export default [
    {
        id: '1',
        desc: 'rent',
        note: '',
        amount: 19500,
        createdAt: 0
    },
    {
        id: '2',
        desc: 'gum',
        note: '',
        amount: 100,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        desc: 'cce bill',
        note: '',
        amount: 3500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];
