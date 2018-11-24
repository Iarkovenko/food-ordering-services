import React from 'react';
import dataOrderHistory from '../data/order-history.json';

const OrderHistory = () => (
  <tbody>
    <h1>ORDER HISTORY</h1>
    <table>
      <tr>
        <th> Date </th> <th> Price </th> <th> Delivery address </th>
        <th> Rating </th>
      </tr>
      {dataOrderHistory.map(item => (
        <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.price}</td>
          <td>{item.address}</td>
          <td>{item.rating}</td>
        </tr>
      ))}
    </table>
  </tbody>
);

export default OrderHistory;
