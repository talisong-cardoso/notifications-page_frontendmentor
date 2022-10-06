import React from 'react';

const privateMessage = (avatar, date, id, message, name, open, onClick) => {
  return (
    <section 
        className={`notification ${open ? 'open' : ''}`} 
        key={id}
        onClick={()=>{onClick(id)}}
    >
      <img className="notification__avatar" src={avatar} alt="avatar" />
      <div className="notification__details">
        <div>
          <span className="notification__name">{name} </span>
          followed you
          {!open && <div className="notification__dot"></div>}
        </div>
        <p className="notification__date">{date}</p>
        <article className="notification__message">
          <p className="notification__message-content">{message}</p>
        </article>
      </div>
    </section>
  );
};

export default privateMessage;
