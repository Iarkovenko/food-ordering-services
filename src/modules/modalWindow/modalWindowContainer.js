/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';

import menuOperation from '../../redux/menuOperation';

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    minWidth: 600,
    minHeight: 300,
    backgroundColor: '#fff',
    padding: 16,
  },
};

class Modal extends Component {
  containerRef = createRef();

  state = {};

  componentDidMount = () => {
    const { items, id } = this.props;
    const currentItem = items.find(item => item.id === id);
    this.setState({ ...currentItem });
    window.addEventListener('keydown', this.handleWindowKeyDown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleWindowKeyDown);
  };

  handleClickBackdrop = e => {
    const { switchModalWindow } = this.props;
    if (e.target !== this.containerRef.current) return;
    switchModalWindow();
  };

  handleCloseModal = () => {
    const { switchModalWindow } = this.props;
    switchModalWindow();
  };

  handleWindowKeyDown = e => {
    const { switchModalWindow } = this.props;
    if (e.code !== 'Escape') return;
    switchModalWindow();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleUpdateItem = e => {
    e.preventDefault();
    const { updateMenuItem, switchModalWindow } = this.props;
    const updateItem = { ...this.state };
    updateMenuItem(updateItem).then(res => {
      if (res.status !== 200) return;
      switchModalWindow();
    });
  };

  render() {
    const { name, description, category, image, price } = this.state;
    const { categories } = this.props;

    return (
      <div
        style={styles.backdrop}
        ref={this.containerRef}
        onClick={this.handleClickBackdrop}
        onKeyDown={() => {}}
      >
        <div style={styles.modal}>
          <form onSubmit={this.handleUpdateItem}>
            <h1>Редактировать меню</h1>
            <label>Имя</label>
            <input
              onChange={this.handleChange}
              value={name}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <label>Описание</label>
            <textarea
              onChange={this.handleChange}
              value={description}
              name="description"
              placeholder="Description"
              required
            />
            <label>Категории</label>
            <select
              onChange={this.handleChange}
              value={category}
              name="category"
            >
              {categories.map(o => (
                <option key={o.id} value={o.name}>
                  {o.name}
                </option>
              ))}
            </select>
            <label>Ссылка на картинку</label>
            <input
              onChange={this.handleChange}
              value={image}
              type="text"
              name="image"
              placeholder="img link"
              required
            />
            <label>Цена</label>
            <input
              onChange={this.handleChange}
              value={price}
              type="number"
              name="price"
              placeholder="Price"
              required
            />
            <button type="submit">Обновить</button>
          </form>
          <button type="button" onClick={this.handleCloseModal}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCurrentData: menuOperation.fetchDataForModalWindow,
  updateMenuItem: menuOperation.updateDataOfMenuItem,
};

export default connect(
  null,
  mapDispatchToProps,
)(Modal);
