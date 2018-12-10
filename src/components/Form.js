import React, { Component } from 'react';
import moment from 'moment';

class Form extends Component {
  state = {
    address: '',
    price: '',
    raiting: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleGetData = (e, address, price, raiting) => {
    e.preventDefault();
    const { postData } = this.props;
    const dataToPost = {
      address,
      price,
      raiting,
      date: moment().format('M/D/YYYY'),
    };
    postData(dataToPost);
  };

  render() {
    const { address, price, raiting } = this.state;
    // const {postData} = this.props;
    return (
      <form>
        <p>Delivery adress</p>
        <input
          name="address"
          type="text"
          value={address}
          onChange={this.handleChange}
          placeholder="Enter your delivery adress"
          require
        />

        <p>Price</p>
        <input
          name="price"
          type="number"
          value={price}
          onChange={this.handleChange}
          placeholder="Enter Price"
          require
        />

        <p>Raiting</p>
        <select
          name="raiting"
          value={raiting}
          onChange={this.handleChange}
          require
        >
          <option value="" selected disabled>
            ...
          </option>
          <option value="1">1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
          <option value="4"> 4</option>
          <option value="5"> 5</option>
          <option value="6"> 6</option>
          <option value="7"> 7</option>
          <option value="8"> 8</option>
          <option value="9"> 9</option>
          <option value="10">10 </option>
        </select>
        <button
          type="button"
          onClick={e => this.handleGetData(e, address, price, raiting)}
        >
          POST
        </button>
      </form>
    );
  }
}

export default Form;
