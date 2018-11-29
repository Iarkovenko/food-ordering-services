import React from 'react';

const CommnetsList = ({ commentsOfMenuItem }) => (
  <ul>
    {commentsOfMenuItem.map(({ id, comment }) => (
      <li key={id}>
        <p> {comment} </p>
      </li>
    ))}
  </ul>
);

export default CommnetsList;
