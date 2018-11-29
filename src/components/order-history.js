import React from 'react';

const OrderHistory = ({ dataOrderHistory }) => (
  <tbody>
    <h1>ORDER HISTORY</h1>
    <table>
      <tr>
        <th> Date </th> <th> Price </th> <th> Delivery address </th>
        <th> Rating </th>
      </tr>
      {dataOrderHistory.map(({ id, date, price, address, rating }) => (
        <tr key={id}>
          <td>{date}</td>
          <td>{price}</td>
          <td>{address}</td>
          <td>{rating}</td>
        </tr>
      ))}
    </table>
  </tbody>
);

export default OrderHistory;
