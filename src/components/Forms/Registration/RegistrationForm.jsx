import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import {
    Button,
    NavBtn,
    RegContainer,
    RegFormStyled,
} from './RegistrationFormStyled';
import { LogoStyled } from 'pages/RegistrationPage/RegistrationPageStyled';

import Logotip from '../../../assests/img/logo.svg';

import { InputAdornment, TextField } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PasswordStrengthBar from 'react-password-strength-bar';
import { registerUserThunk } from 'redux/auth/userThunks';

const RegistrationForm = () => {
    const dispatchEvent = useDispatch();

    const validationSchema = Yup.object({
        username: Yup.string()
            .min(2, 'Must be at least 2 characters')
            .max(20, 'Must be up to 20 characters')
            .required('Required'),

        email: Yup.string()
            .email('Invalid email address')
            .min(6, 'Must be at least 6 characters')
            .max(25, 'Must be up to 25 characters')
            .required('Required'),

        password: Yup.string()
            .min(6, 'Must be 6 characters or less')
            .max(12, 'Must be up to 12 characters')
            .required('Required')
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]),?[\s\S]{6,12}$/,
                'Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one number'
            ),

        password2: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Passwords must match'
        ),
    });

    return (
        <RegContainer>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    password2: '',
                }}
                validationSchema={validationSchema}
                onSubmit={({ username, password, email }, { resetForm }) => {
                    dispatchEvent(
                        registerUserThunk({ username, password, email })
                    );
                    resetForm();
                }}
            >
                {formik => (
                    <RegFormStyled onSubmit={formik.handleSubmit}>
                        <LogoStyled>
                            <img
                                src={Logotip}
                                alt="Logo MoneyGuard"
                                width="36px"
                                height="36px"
                            />
                            <h3>MoneyGuard</h3>
                        </LogoStyled>

                        <Field
                            as={TextField}
                            InputProps={{
                                inputProps: { style: { color: 'white' } },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountBoxIcon
                                            style={{ color: 'grey' }}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            style={{ width: '100%', color: 'grey' }}
                            variant="standard"
                            name="username"
                            autoComplete="username"
                            type="text"
                            label=""
                            htmlFor="username"
                            placeholder="Name"
                            onChange={formik.handleChange}
                            error={Boolean(formik.errors.username)}
                            helperText={
                                formik.errors.username &&
                                'Please enter your name'
                            }
                        />

                        <Field
                            as={TextField}
                            InputProps={{
                                inputProps: { style: { color: 'white' } },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon style={{ color: 'grey' }} />
                                    </InputAdornment>
                                ),
                            }}
                            style={{ width: '100%', color: 'white' }}
                            variant="standard"
                            name="email"
                            type="email"
                            label=""
                            htmlFor="email"
                            placeholder="E-mail"
                            autoComplete="email"
                            onChange={formik.handleChange}
                            error={Boolean(formik.errors.email)}
                            helperText={
                                formik.errors.email &&
                                'Please enter a valid email address'
                            }
                        />

                        <Field
                            as={TextField}
                            InputProps={{
                                inputProps: { style: { color: 'white' } },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon style={{ color: 'grey' }} />
                                    </InputAdornment>
                                ),
                            }}
                            style={{ width: '100%', color: 'white' }}
                            variant="standard"
                            name="password"
                            type="password"
                            label=""
                            htmlFor="password"
                            placeholder="Password"
                            autoComplete="new-password"
                            onChange={formik.handleChange}
                            error={Boolean(formik.errors.password)}
                            helperText={
                                formik.errors.password &&
                                'Password must contain at least 6 and up to 12 characters'
                            }
                        />

                        <Field
                            as={TextField}
                            InputProps={{
                                inputProps: { style: { color: 'white' } },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon style={{ color: 'grey' }} />
                                    </InputAdornment>
                                ),
                            }}
                            style={{ width: '100%', color: 'white' }}
                            variant="standard"
                            name="password2"
                            type="password"
                            label=""
                            htmlFor="password2"
                            placeholder="Confirm password"
                            autoComplete="new-password"
                            onChange={formik.handleChange}
                            error={Boolean(formik.errors.confirmPassword)}
                            helperText={
                                formik.errors.confirmPassword &&
                                'Please enter your valid password'
                            }
                        />
                        <PasswordStrengthBar
                            password={formik.values.password}
                            minLength={2}
                            maxLength={12}
                        />
                        {formik.values.password !== formik.values.password2 && (
                            <span style={{ color: 'red' }}>
                                Passwords do not match!!!
                            </span>
                        )}

                        <Button
                            type="submit"
                            disabled={
                                formik.values.password !==
                                formik.values.password2
                            }
                        >
                            REGISTER
                        </Button>
                        <Link to="/login">
                            <NavBtn>LOG IN</NavBtn>
                        </Link>
                    </RegFormStyled>
                )}
            </Formik>
        </RegContainer>
    );
};
export default RegistrationForm;
