import React, { Component, createRef } from 'react';

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
    maxWidth: 600,
    minHeight: 300,
    backgroundColor: '#fff',
    padding: 16,
  },
};
export default class Modal extends Component {
  containerRef = createRef();

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleWindowKeyDown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleWindowKeyDown);
  };

  handleClickBackdrop = e => {
    const { onClose } = this.props;
    if (e.target !== this.containerRef.current) return;
    onClose();
  };

  handleWindowKeyDown = e => {
    if (e.code !== 'Escape') return;
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { onClose, children } = this.props;
    return (
      <div
        style={styles.backdrop}
        ref={this.containerRef}
        onClick={this.handleClickBackdrop}
        onKeyDown={() => {}}
      >
        <div style={styles.modal}>
          {children}
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
