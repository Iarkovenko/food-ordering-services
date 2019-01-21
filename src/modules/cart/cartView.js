import React from 'react';

const ViewCart = ({ products = [] }) =>
  products.length > 0 ? (
    <table>
      <tbody>
        {products.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>
              <button type="button">+</button>
              {amount}
              <button type="button">-</button>
            </td>
            <td>
              <button type="button">Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <h1>В корзине нет товаров!</h1>
  );

export default ViewCart;
