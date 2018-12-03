import React, { Fragment } from 'react';
import Modal from './Modal';

const OrderHistory = ({
  dataOrderHistory,
  handleRemove,
  handleOpenModal,
  isModalOpen,
  handleCloseModal,
  moreItemInfoById,
  isLoading,
}) => (
  <Fragment>
    <tbody>
      <h1>ORDER HISTORY</h1>
      {isLoading ? <h1>Loading ...</h1> : null}
      <table>
        <tr>
          <th> Date </th>
          <th> Price </th>
          <th> Delivery address </th>
          <th> Rating </th>
        </tr>
        {dataOrderHistory.map(({ id, date, price, address, rating }) => (
          <tr key={id}>
            <td>{date}</td>
            <td>{price}</td>
            <td>{address}</td>
            <td>{rating}</td>
            <td>
              <button type="button" onClick={() => handleOpenModal(id)}>
                More Detail
              </button>
            </td>
            <td>
              <button type="button" onClick={() => handleRemove(id)}>
                Remove
              </button>
            </td>
          </tr>
        ))}
      </table>
    </tbody>
    <Fragment>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <p>{moreItemInfoById}</p>
        </Modal>
      )}
    </Fragment>
  </Fragment>
);

export default OrderHistory;
