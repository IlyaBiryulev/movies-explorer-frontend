import React from 'react';
import './InfoTooltip.css';

function InfoTooltip({isOpen, onClose, isSucces, isError}) {
  const infoTooltipText = () => {
    if (isSucces) {
      return 'Данные успешно изменены'
    } else if (isError) {
      return 'Что-то пошло не так! Попробуйте ещё раз.'
    }
  }

  return (
    <div>
      <section className={`popup popup_type_tooltip ${isOpen && 'popup_opened'}`}>
          <div className="popup__container popup__container_type_tooltip">
            <div className={`popup__icon ${isSucces && 'popup__icon_succes'} ${isError && 'popup__icon_fail'}`}></div>
            <p className='popup__reg-status'>{infoTooltipText()}</p>
            <button className="popup__close-button" type="button" onClick = {onClose}></button>
          </div>
        </section>
    </div>
  );
}

export default InfoTooltip;
