import validator from 'validator';

const validators = {
    email: {
        validator: (value: string) => validator.isEmail(value),
        message: 'Invalid email address',
    },
};

export default validators;
