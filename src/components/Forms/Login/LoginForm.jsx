import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/auth/userThunks';
import { Link } from 'react-router-dom';

import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, NavBtn } from '../Registration/RegistrationFormStyled';
import { LogContainer, LogFormStyled, LogotipStyled} from './LoginFormStyled';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import Logotip from '../../../assests/img/logo.svg';


const LoginForm = () => {
    const dispatchEvent = useDispatch();
    return (
        <LogContainer>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),

                    password: Yup.string().required('Required'),
                })}
                onSubmit={(values, { resetForm }) => {
                    dispatchEvent(loginUserThunk(values));
                    resetForm();
                }}
            >
                {formik => (
                    <LogFormStyled onSubmit={formik.handleSubmit}>
                        <LogotipStyled>
                            <img
                                src={Logotip}
                                alt="Logo MoneyGuard"
                                width="36px"
                                height="36px"
                            />
                            <h3>MoneyGuard</h3>
                        </LogotipStyled>
                        <Field
                            as={TextField}
                            InputProps={{
                                inputProps: { style: { color: 'white', stroke: "none" } },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon style={{ color: 'grey' }} />
                                    </InputAdornment>
                                ),
                            }}
                            style={{ width: '100%', color: 'white', borderBottom: "1px solid #ffffff66" }}
                            variant="standard"
                            name="email"
                            type="email"
                            label=""
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
                                inputProps: { style: { color: 'white', stroke: "none" } },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon style={{ color: 'grey' }} />
                                    </InputAdornment>
                                ),
                            }}
                            style={{ width: '100%', color: 'white', borderBottom: "1px solid #ffffff66" }}
                            variant="standard"
                            name="password"
                            type="password"
                            label=""
                            placeholder="Password"
                            autoComplete="new-password"
                            onChange={formik.handleChange}
                            error={Boolean(formik.errors.password)}
                            helperText={
                                formik.errors.password &&
                                'Please enter your valid password'
                            }
                        />

                        <Button type="submit">LOG IN</Button>

                        <Link to="/register">
                            <NavBtn>REGISTER</NavBtn>
                        </Link>
                    </LogFormStyled>
                )}
            </Formik>
        </LogContainer>
    );
};
export default LoginForm;
