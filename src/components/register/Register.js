import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import * as auth from "../auth/Auth"
import { Link, withRouter } from 'react-router-dom'; 
import useForm from '../../hooks/useForm';

const alertMessage = 'Уууупс... что-то произошло на сервере, попробуй чуть позже. Код ошибки:';

function Register(props) {

  const email = 'email';
  const password = 'password';

  const emailAndPassSetter = useForm({email:'', password:''});
    
    function handleOnChange(e) {
      emailAndPassSetter.handleChange(e)
    }

    function handleSubmit(e) {
      e.preventDefault();
      auth.register(emailAndPassSetter.values[email], emailAndPassSetter.values[password]).then((res) => {
        props.history.push('/sign-in');
      })
      .catch((err) => {
        console.log(err);
        window.alert(`${alertMessage} ${err}`);
      })
    }

  return (
    <form onSubmit={handleSubmit} className="login" method="post" name="login" noValidate>
        <h1 className="login__title">Регистрация</h1>
        <input id="login__email" type="text" value={emailAndPassSetter.values[email] || ''} onChange={handleOnChange} name="email" placeholder="Email"
                  className="login__email" minLength="2" maxLength="40" required>
        </input> 
        <div className="login__line"/>
        <input id="login__password" type="password" value={emailAndPassSetter.values[password] || ''} onChange={handleOnChange} name="password" placeholder="Password"
                  className="login__password" minLength="2" maxLength="200" required>
        </input>
        <div className="login__line"/>
        <button type="submit" className="login__register" >Зарегистрироваться</button>
        <NavLink to="/sign-in" className="login__redirect">Уже зарегистрированы? Войти</NavLink>
    </form>
  );
}

export default withRouter(Register); 