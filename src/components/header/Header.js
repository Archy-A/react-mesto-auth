import React from 'react';

function Header({  
                 loggedIn,
                 email,
                 setLoggedIn
                 }) {

  function handleSubmmit() {
    setLoggedIn(false);
  }
 console.log("header email:",email);
  return (
   
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__container">
        {/* <div className={`header__email ${loggedIn ? '' : 'element-hidden' } `} >{email}</div> */}
        <div className={`header__email `} >{email}</div>
        <button onClick={handleSubmmit} className={`header__exit ${loggedIn ? '' : 'element-hidden' } `} >EXIT</button>
      </div>
    </header>
  );
}

export default Header; 