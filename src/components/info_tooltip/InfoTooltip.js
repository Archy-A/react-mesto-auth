import React from 'react';

function InfoTooltip({  
                            isOpen,
                            onClose,
                        }) {

  return (

    <div className={`popup ${isOpen ? 'popup_opened' : ''} `} >
      <div className="popup__container">
        <button type="button" onClick={onClose} className="popup__btn-close" aria-label="Крестик, закрыть окно редактирования"></button>
        <form className={`popup__form`} noValidate>
          <div className="confirm-logo"/>
              <h1 className="popup__confirm-message">Вы успешно зарегистрировались!</h1>
        </form>
      </div>
    </div>
    )
}

export default InfoTooltip; 
