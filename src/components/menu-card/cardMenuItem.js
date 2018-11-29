import React from 'react';
import ComentSectionToAdd from './comentSection';
import CommnetsList from './commnetsList';

const MenuItem = ({
  dataObj = [],
  imageWidth = '170px',
  imageHeight = '170px',
}) => (
  <ul>
    {dataObj.map(
      ({ id, image, name, price, description, ingredients, comments = [] }) => (
        <li key={id}>
          <div>
            <img
              src={image}
              width={imageWidth}
              height={imageHeight}
              alt="img of menu item"
            />
            <h4>{name}</h4>
            <p>{price} UAH</p>
          </div>
          <div>
            <p>{description}</p>
            <p>{ingredients}</p>
          </div>
          {comments.length > 0 ? (
            <CommnetsList commentsOfMenuItem={dataObj.comments} />
          ) : (
            <p>Item does not have any comments</p>
          )}
          <ComentSectionToAdd />
        </li>
      ),
    )}
  </ul>
);

export default MenuItem;
