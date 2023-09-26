import React, {useState} from 'react';

export default function Usercarditem(props) {

    //Состояние активна ли карточка (после нажатия на нее)
    const [isActive, setIsActive] = useState(false)
   
    return (
    
        <div 
            className={'usercard'} 
            // Если активна, то карточка занимает 2 строки
            style={isActive ? {gridRow: 'span 2', padding: '12px 12px 12px 12px',zIndex: '22'} : {}} 
            onClick={(event) => {
                setIsActive(!isActive)
                event.preventDefault();
                props.setDarkBg(!props.darkBg)
            }}
        >
        <div className='usercard__content'>
            {/* Лого, name, username  */}
            <div className='usercard__head'>
                <div className='usercard__logo'>{props.usercard.name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')}</div>
                <div className='usercard__name-username'>
                    <span className='usercard__name'>{props.usercard.name}</span>
                    <span className='usercard__username'>{props.usercard.username}</span>
                </div>
            </div>
            {/* Остальные данные пользователя */}
            <div className='usercard__body'>
                <div className='usercard__info'>
                    <div className='usercard__info-logo'>
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.1666 0.833328H1.83329C0.916626 0.833328 0.174959 1.58333 0.174959 2.49999L0.166626 12.5C0.166626 13.4167 0.916626 14.1667 1.83329 14.1667H15.1666C16.0833 14.1667 16.8333 13.4167 16.8333 12.5V2.49999C16.8333 1.58333 16.0833 0.833328 15.1666 0.833328ZM14.8333 4.37499L8.94163 8.05833C8.67496 8.22499 8.32496 8.22499 8.05829 8.05833L2.16663 4.37499C1.95829 4.24166 1.83329 4.01666 1.83329 3.775C1.83329 3.21666 2.44163 2.88333 2.91663 3.175L8.49996 6.66666L14.0833 3.175C14.5583 2.88333 15.1666 3.21666 15.1666 3.775C15.1666 4.01666 15.0416 4.24166 14.8333 4.37499Z" fill="white"/>
                        </svg>
                    </div>
                    <span className='usercard__info-text'>email:{props.usercard.email}</span>
                </div>
                <div className='usercard__info'>
                    <div className='usercard__info-logo'>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.49996 0.166672C3.89996 0.166672 0.166626 3.90001 0.166626 8.5C0.166626 13.1 3.89996 16.8333 8.49996 16.8333C13.1 16.8333 16.8333 13.1 16.8333 8.5C16.8333 3.90001 13.1 0.166672 8.49996 0.166672ZM7.66663 15.1083C4.37496 14.7 1.83329 11.9 1.83329 8.5C1.83329 7.98334 1.89996 7.49167 2.00829 7.00834L5.99996 11V11.8333C5.99996 12.75 6.74996 13.5 7.66663 13.5V15.1083ZM13.4166 12.9917C13.2 12.3167 12.5833 11.8333 11.8333 11.8333H11V9.33334C11 8.875 10.625 8.5 10.1666 8.5H5.16663V6.83334H6.83329C7.29163 6.83334 7.66663 6.45834 7.66663 6.00001V4.33334H9.33329C10.25 4.33334 11 3.58334 11 2.66667V2.32501C13.4416 3.31667 15.1666 5.70834 15.1666 8.5C15.1666 10.2333 14.5 11.8083 13.4166 12.9917Z" fill="white"/>
                        </svg>
                    </div>
                    <span className='usercard__info-text'>website:{props.usercard.website}</span>
                </div>
                <div className='usercard__info'>
                    <div className='usercard__info-logo'>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.5031 10.2083L11.3864 9.96667C10.8781 9.90833 10.3781 10.0833 10.0197 10.4417L8.48639 11.975C6.12806 10.775 4.19473 8.85 2.99473 6.48333L4.53639 4.94167C4.89473 4.58333 5.06973 4.08333 5.01139 3.575L4.76973 1.475C4.66973 0.633333 3.96139 0 3.11139 0H1.66973C0.728061 0 -0.0552721 0.783333 0.00306123 1.725C0.444728 8.84167 6.13639 14.525 13.2447 14.9667C14.1864 15.025 14.9697 14.2417 14.9697 13.3V11.8583C14.9781 11.0167 14.3447 10.3083 13.5031 10.2083Z" fill="white"/>
                    </svg>
                    </div>
                    <span className='usercard__info-text'>phone:{props.usercard.phone}</span>
                </div>
                {/* Если на карточку нажали то отображаем */}
                {isActive && <>
                <div className='usercard__info'>
                    <div className='usercard__info-logo'>
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.528 3.64C14.456 3.272 14.128 3 13.744 3H2.25605C1.87205 3 1.54405 3.272 1.47205 3.64L0.800049 7V7.8C0.800049 8.24 1.16005 8.6 1.60005 8.6V12.6C1.60005 13.04 1.96005 13.4 2.40005 13.4H8.80005C9.24005 13.4 9.60005 13.04 9.60005 12.6V8.6H12.8V12.6C12.8 13.04 13.16 13.4 13.6 13.4C14.04 13.4 14.4 13.04 14.4 12.6V8.6C14.84 8.6 15.2 8.24 15.2 7.8V7L14.528 3.64ZM8.00005 11.8H3.20005V8.6H8.00005V11.8ZM2.40005 2.2H13.6C14.04 2.2 14.4 1.84 14.4 1.4C14.4 0.959998 14.04 0.599998 13.6 0.599998H2.40005C1.96005 0.599998 1.60005 0.959998 1.60005 1.4C1.60005 1.84 1.96005 2.2 2.40005 2.2Z" fill="white"/>
                    </svg>
                    </div>
                    <span className='usercard__info-text'>street:{props.usercard.address.street}</span>
                </div>  
                <div className='usercard__info'>
                    <div className='usercard__info-logo'>
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.55833 13.324V9.324H9.75833V13.324C9.75833 13.764 10.1183 14.124 10.5583 14.124H12.9583C13.3983 14.124 13.7583 13.764 13.7583 13.324V7.724H15.1183C15.4863 7.724 15.6623 7.268 15.3823 7.028L8.69433 1.004C8.39033 0.732003 7.92633 0.732003 7.62233 1.004L0.93433 7.028C0.66233 7.268 0.83033 7.724 1.19833 7.724H2.55833V13.324C2.55833 13.764 2.91833 14.124 3.35833 14.124H5.75833C6.19833 14.124 6.55833 13.764 6.55833 13.324Z" fill="white"/>
                    </svg>
                    </div>
                    <span className='usercard__info-text'>suite:{props.usercard.address.suite}</span>
                </div> 
                <div className='usercard__info'>
                    <div className='usercard__info-logo'>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.40005 8.194V11.394C2.40005 12.058 2.93605 12.594 3.60005 12.594C4.26405 12.594 4.80005 12.058 4.80005 11.394V8.194C4.80005 7.53 4.26405 6.994 3.60005 6.994C2.93605 6.994 2.40005 7.53 2.40005 8.194ZM7.20005 8.194V11.394C7.20005 12.058 7.73605 12.594 8.40005 12.594C9.06405 12.594 9.60005 12.058 9.60005 11.394V8.194C9.60005 7.53 9.06405 6.994 8.40005 6.994C7.73605 6.994 7.20005 7.53 7.20005 8.194ZM2.00005 16.594H14.8C15.464 16.594 16 16.058 16 15.394C16 14.73 15.464 14.194 14.8 14.194H2.00005C1.33605 14.194 0.800049 14.73 0.800049 15.394C0.800049 16.058 1.33605 16.594 2.00005 16.594ZM12 8.194V11.394C12 12.058 12.536 12.594 13.2 12.594C13.864 12.594 14.4 12.058 14.4 11.394V8.194C14.4 7.53 13.864 6.994 13.2 6.994C12.536 6.994 12 7.53 12 8.194ZM7.65605 0.186L1.33605 3.514C1.00805 3.682 0.800049 4.026 0.800049 4.394C0.800049 4.946 1.24805 5.394 1.80005 5.394H15.008C15.552 5.394 16 4.946 16 4.394C16 4.026 15.792 3.682 15.464 3.514L9.14405 0.186C8.68005 -0.062 8.12005 -0.062 7.65605 0.186Z" fill="white"/>
                    </svg>
                    </div>
                    <span className='usercard__info-text'>city:{props.usercard.address.city}</span>
                </div>
                <div className='usercard__info'>
                    <div className='usercard__info-logo'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.6 1.6H10.256C9.92005 0.672 9.04005 0 8.00005 0C6.96005 0 6.08005 0.672 5.74405 1.6H2.40005C1.52005 1.6 0.800049 2.32 0.800049 3.2V14.4C0.800049 15.28 1.52005 16 2.40005 16H13.6C14.48 16 15.2 15.28 15.2 14.4V3.2C15.2 2.32 14.48 1.6 13.6 1.6ZM8.00005 1.6C8.44005 1.6 8.80005 1.96 8.80005 2.4C8.80005 2.84 8.44005 3.2 8.00005 3.2C7.56005 3.2 7.20005 2.84 7.20005 2.4C7.20005 1.96 7.56005 1.6 8.00005 1.6ZM8.80005 12.8H4.80005C4.36005 12.8 4.00005 12.44 4.00005 12C4.00005 11.56 4.36005 11.2 4.80005 11.2H8.80005C9.24005 11.2 9.60005 11.56 9.60005 12C9.60005 12.44 9.24005 12.8 8.80005 12.8ZM11.2 9.6H4.80005C4.36005 9.6 4.00005 9.24 4.00005 8.8C4.00005 8.36 4.36005 8 4.80005 8H11.2C11.64 8 12 8.36 12 8.8C12 9.24 11.64 9.6 11.2 9.6ZM11.2 6.4H4.80005C4.36005 6.4 4.00005 6.04 4.00005 5.6C4.00005 5.16 4.36005 4.8 4.80005 4.8H11.2C11.64 4.8 12 5.16 12 5.6C12 6.04 11.64 6.4 11.2 6.4Z" fill="white"/>
                    </svg>
                    </div>
                    <span className='usercard__info-text'>zipcode:{props.usercard.address.zipcode}</span>
                </div> 
                <div className='usercard__info'>
                    <div className='usercard__info-logo'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.4 4H12V2.4C12 1.512 11.288 0.799999 10.4 0.799999H5.6C4.712 0.799999 4 1.512 4 2.4V4H1.6C0.712 4 0 4.712 0 5.6V14.4C0 15.288 0.712 16 1.6 16H14.4C15.288 16 16 15.288 16 14.4V5.6C16 4.712 15.288 4 14.4 4ZM5.6 2.4H10.4V4H5.6V2.4ZM14.4 14.4H1.6V12.8H14.4V14.4ZM14.4 10.4H1.6V6.4C1.6 5.96 1.96 5.6 2.4 5.6H4V6.4C4 6.84 4.36 7.2 4.8 7.2C5.24 7.2 5.6 6.84 5.6 6.4V5.6H10.4V6.4C10.4 6.84 10.76 7.2 11.2 7.2C11.64 7.2 12 6.84 12 6.4V5.6H13.6C14.04 5.6 14.4 5.96 14.4 6.4V10.4Z" fill="white"/>
                    </svg>
                    </div>
                    <span className='usercard__info-text'>name company:{props.usercard.company.name}</span>
                </div>
                <div className='usercard__info'>
                    <div className='usercard__info-logo'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.392 0H1.6C0.72 0 0 0.72 0 1.6V16L3.192 12.8H14.392C15.272 12.8 15.992 12.08 15.992 11.2V1.6C15.992 0.72 15.272 0 14.392 0ZM8.792 9.6H7.192V8H8.792V9.6ZM8.792 5.6C8.792 6.04 8.432 6.4 7.992 6.4C7.552 6.4 7.192 6.04 7.192 5.6V4C7.192 3.56 7.552 3.2 7.992 3.2C8.432 3.2 8.792 3.56 8.792 4V5.6Z" fill="white"/>
                    </svg>
                    </div>
                    <span className='usercard__info-text'>catchPhrase:{props.usercard.company.catchPhrase}</span>
                </div>
                <div className='usercard__info'>
                    <div className='usercard__info-logo'>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.34398 9.5025C1.38079 9.5025 0.599976 10.2833 0.599976 11.2465C0.599976 12.2097 1.38079 12.9905 2.34398 12.9905C3.30716 12.9905 4.08798 12.2097 4.08798 11.2465C4.08798 10.2833 3.30716 9.5025 2.34398 9.5025ZM1.87198 5.1745C1.19998 5.0625 0.599976 5.6145 0.599976 6.2945C0.599976 6.8625 1.02398 7.3185 1.58398 7.4145C3.91998 7.8225 5.75998 9.6705 6.17598 12.0065C6.27198 12.5665 6.72798 12.9905 7.29598 12.9905C7.97598 12.9905 8.52798 12.3905 8.42398 11.7185C7.87998 8.3585 5.23198 5.7105 1.87198 5.1745V5.1745ZM1.84798 0.606497C1.18398 0.534497 0.599976 1.0705 0.599976 1.7345C0.599976 2.3185 1.03998 2.7985 1.61598 2.8545C6.42398 3.3345 10.248 7.1585 10.728 11.9665C10.784 12.5505 11.264 12.9905 11.848 12.9905C12.52 12.9905 13.048 12.4065 12.984 11.7425C12.4 5.8705 7.72798 1.1905 1.84798 0.606497Z" fill="white"/>
                    </svg>
                    </div>
                    <span className='usercard__info-text'>bs:{props.usercard.company.bs}</span>
                </div></>}
            </div>
        </div>
    </div>
  )
}
