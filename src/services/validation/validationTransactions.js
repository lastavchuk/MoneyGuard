import * as yup from 'yup';

export const modalTransactionsSchema = yup.object().shape({
    amount: yup.number().positive('The sum number must be positive'),
});