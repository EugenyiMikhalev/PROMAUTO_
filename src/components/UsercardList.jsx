import React from 'react';
import Usercarditem from './Usercarditem';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
  

export default function UsercardList({usercards,  darkBg, setDarkBg}) {

    // Если нету карточек выводим "Пользователи не найдены"
    if(!usercards.length){
        return (
            <h1 style={{textAlign: 'center', color: '#fff', fontFamily: 'var(--font-family-robot)'}}>
              Пользователи не найдены!
            </h1>
          )
    }
    return (
       
            <TransitionGroup className='usercardlist' >
            {usercards.map((usercard, index) => 
                // Выводим всех пользователей
                <CSSTransition
                key={usercard.id}
                timeout={300}
                classNames="usercard"
              >
                <Usercarditem 
                    number={index+1} 
                    usercard={usercard} 
                    key={usercard.id} 
                    darkBg={darkBg} 
                    setDarkBg={setDarkBg}
                /> 
                </CSSTransition>
            )}
            </TransitionGroup>
        
    )
  
}
