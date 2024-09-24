import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as FacebookLogo } from './logos/facebook-logo.svg';
import { ReactComponent as YandexLogo } from './logos/yandex-logo.svg';
import { ReactComponent as GoogleLogo } from './logos/google-logo.svg';
import { ReactComponent as MainImage } from './logos/characters.svg';
import { ReactComponent as LockImage } from './logos/Group_1171274237.svg';
import { Context } from '../..'
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import './loginform.css';

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const {store} = useContext(Context);
    const [form, setForm] = useState(true);
    const [validForm, setValidForm] = useState(false);
    const [loginValid, setLoginValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(true);
    const [clientWidth, setClientWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setClientWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const phoneRegExp = /^(\+7|8)?[\s-]?(\(?\d{3}\)?[\s-]?)?\d{7,10}$/;

    const validateLogin = (input) => {
        const isPhoneNumberValid = phoneRegExp.test(input);
        const isEmailValid = /\S+@\S+\.\S+/.test(input);
        const isUsernameValid = /^[a-zA-Z0-9_]+$/.test(input);
        setLoginValid(isPhoneNumberValid || isEmailValid || isUsernameValid);
    };

    useEffect(() => {
        setValidForm(loginValid && password.length > 0);
    }, [login, password, loginValid]);

    const handleLogin = async () => {
        await store.login(login, password);
        if (localStorage.getItem('isAuth')) {
            navigate('/');
            window.location.reload();
        } else{
            console.log('Пользователь не авторизован.');
            setPasswordValid(false);
        }
    };

    return (
        <div className='login-form-container'>
            <div className='big-text-container'>
                Для оформления подписки на тариф, необходимо авторизоваться.
                {clientWidth < 900 ? null : <MainImage className='image' alt='MainImage' />}
            </div>

            <div className='input-container-outer'>
                <LockImage className='input-image' alt='LockImage' />

                <div className='input-container-inner'>
                    <div className='switch'>
                        <div
                            className={form ? 'sign-in-toggle active-text' : 'sign-in-toggle'}
                            onClick={() => setForm(true)}
                        >
                            Войти
                            <div className={form ? 'sign-in-underline active-underline' : 'sign-in-underline'}></div>
                        </div>
                        <div
                            className={form ? 'sign-up-toggle' : 'sign-up-toggle active-text'}
                            onClick={() => setForm(false)}
                        >
                            Зарегистрироваться
                            <div className={form ? 'sign-up-underline' : 'sign-up-underline active-underline'}></div>
                        </div>
                    </div>

                    <div className='login-password-container'>
                        <div className='login-container'>
                            Логин или номер телефона:
                            <input
                                className={`input ${!loginValid && login ? 'input-invalid' : ''}`}
                                value={login}
                                placeholder=''
                                onChange={(e) => {
                                    setLogin(e.target.value);
                                    validateLogin(e.target.value);
                                }}
                            />
                            {!loginValid && login && <div className='error-message'>Введите корректные данные</div>}
                        </div>
                        <div className='password-container'>
                            Пароль:
                            <input
                                className={`input ${!passwordValid ? 'input-invalid' : ''}`}
                                type='password'
                                value={password}
                                placeholder=''
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {!passwordValid && <div className='error-message'>Неправильный пароль</div>}
                        </div>
                    </div>
                    <button
                        onClick={validForm ? handleLogin : null}
                        className={validForm ? 'insert-btn' : 'insert-btn-inactive'}
                    >
                        Войти
                    </button>
                    <a href='/login' className='password-recovery-btn'>Восстановить пароль</a>
                    <div className='other-links-container'>
                        Войти через:
                        <div className='other-links'>
                            <div className='other-link'>
                                <GoogleLogo className='logo' alt='google-logo' />
                            </div>
                            <div className='other-link'>
                                <FacebookLogo className='logo' alt='facebook-logo' />
                            </div>
                            <div className='other-link'>
                                <YandexLogo className='logo' alt='yandex-logo' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {clientWidth < 900 ? (
                <div className='footer-img-container'>
                    <MainImage className='image' alt='MainImage' />
                </div>
            ) : null}
        </div>
    );
};

export default observer(LoginForm);