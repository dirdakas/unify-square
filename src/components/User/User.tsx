import React from 'react';
import './User.css';

const User = (props: any) => (
  <article className="user" onClick={ props.clicked }>
    <img src={ props.avatarUrl }
         alt="Avatar"
         className="avatar">
    </img>

    <h1>{ props.login }</h1>
    <p>{ props.isAdmin ? 'Admin' : 'Simple user' }</p>
  </article>
);

export default User;
