import React from 'react';
import { useHistory, NavLink } from 'react-router-dom'; 

function Header({  
                 loggedIn,
                 email,
                 setLoggedIn
                 }) {

  const history = useHistory();

  function handleSubmmit() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    history.push('/sign-in');

    console.log(window.location.pathname);  
  }

  let loginButton;
  let linkTo = ''
    if (window.location.pathname === '/sign-in') {
      loginButton = 'Регистрация';
      linkTo = '/sign-up';
    } else {
      loginButton = 'Войти';
      linkTo = '/sign-in';
    }


  return (
   
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__container">
        <div className={`header__email ${loggedIn ? '' : 'element-hidden' } `} >{email}</div>
        <button onClick={handleSubmmit} className={`header__exit ${loggedIn ? '' : 'element-hidden' } `} >Выйти</button>
        <NavLink to={linkTo} className={`header__login ${loggedIn ? 'element-hidden' : '' } `}>{loginButton}</NavLink>
      </div>
    </header>
  );
}

export default Header; 