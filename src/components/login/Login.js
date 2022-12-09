import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import * as auth from "../auth/Auth"
import { Link, withRouter } from 'react-router-dom'; 
import useForm from '../../hooks/useForm';

const alertMessage = 'Уууупс... что-то произошло на сервере, попробуй чуть позже. Код ошибки:';

function Login(props) {

  const email = 'email';
  const password = 'password';

  const emailAndPassSetter = useForm({email:'', password:''});
    
    function handleOnChange(e) {
      emailAndPassSetter.handleChange(e)
    }

    function handleSubmit(e) {
      e.preventDefault();
      auth.sigin(emailAndPassSetter.values[email], emailAndPassSetter.values[password])
      .then(() => {
        props.setLoggedIn(true);
        props.setEmail(emailAndPassSetter.values[email]);
        props.history.push('/');
      })
      .catch((err) => {
        console.log(err);
        window.alert(`${alertMessage} ${err}`);
      })
    }

  return (
    <form onSubmit={handleSubmit} className="login" method="post" name="login" noValidate>
        <h1 className="login__title">Вход</h1>
        <input id="login__email" type="text" value={emailAndPassSetter.values[email] || ''} onChange={handleOnChange} name="email" placeholder="Email"
                  className="login__email" minLength="2" maxLength="40" required>
        </input> 
        <div className="login__line"/>
        <input id="login__password" type="password" value={emailAndPassSetter.values[password] || ''} onChange={handleOnChange} name="password" placeholder="Password"
                  className="login__password" minLength="2" maxLength="200" required>
        </input>
        <div className="login__line"/>
        <button type="submit" className="login__register" >Войти</button>
    </form>
  );
}

export default withRouter(Login); 