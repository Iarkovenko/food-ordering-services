import React from 'react';

const Total = (price, amount) => price * amount;

const CartView = ({
  products = [],
  removeItemFromCart,
  increaseCount,
  decreaseCount,
}) =>
  products.length > 0 ? (
    <div>
      <ul>
        {products.map(({ id, name, price, image, amount }) => (
          <li key={id}>
            <h3>{name}</h3>
            <img src={image} width="100" height="100" alt="menuItemPhoto" />
            <div>
              <button type="button" onClick={() => increaseCount(id)}>
                +
              </button>
              {amount}
              <button type="button" onClick={() => decreaseCount(id)}>
                -
              </button>
            </div>
            <div>
              <p>
                Price:
                <span>{Total(price, amount)}</span>
                UAH
              </p>
            </div>
            <div>
              <button type="button" onClick={() => removeItemFromCart(id)}>
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>В корзине нет товаров!</h1>
  );

export default CartView;
