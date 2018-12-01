import React, { Fragment, Component } from 'react';
import Modal from './Modal';

class App extends Component {
  state = {
    isModalOpen: false,
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <Fragment>
        <button type="button" onClick={this.handleOpenModal}>
          Open
        </button>
        {isModalOpen && <Modal onClose={this.handleCloseModal} />}
      </Fragment>
    );
  }
}

export default App;
