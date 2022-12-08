import React from 'react';
import { NavLink } from "react-router-dom";

function Register({
                onSubmit,
                onChangeHandler
              }) {

  return (
    <form onSubmit={onSubmit} className="login" method="post" name="login" noValidate>
        <h1 className="login__title">Регистрация</h1>
        <input id="login__email" type="text" value={''} onChange={onChangeHandler} name="email" placeholder="Email"
                  className="login__email" minLength="2" maxLength="40" required>
        </input> 
        <div className="login__line"/>
        <input id="login__password" type="password" value={''} onChange={onChangeHandler} name="password" placeholder="Password"
                  className="login__password" minLength="2" maxLength="200" required>
        </input>
        <div className="login__line"/>
        <button type="submit" className="login__register" >Зарегистрироваться</button>
        <NavLink to="/login" className="login__redirect">Уже зарегистрированы? Войти</NavLink>
    </form>
  );
}

export default Register; 