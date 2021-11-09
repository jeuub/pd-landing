import './message.css'

const Message = ({className, name, time, self, children}) => {
 return (
  <div className={`message ${self?'message--right':''} ${className}`}>
    <p className={`message__author ${self?'message__author--right':''}`}>{name}</p>
    <p className={'message__text'}>{children}</p>
    <time className={`message__time`}>{time}</time>
  </div>
 )
}

export default Message;