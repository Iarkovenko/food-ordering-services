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
    this.containerRef.current.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleWindowClick);
  };

  componentWillUnmount = () => {
    this.containerRef.current.removeEventListener(
      'click',
      this.handleWindowClick,
    );
    window.removeEventListener('keydown', this.handleWindowClick);
  };

  handleWindowClick = e => {
    const { onClose } = this.props;
    const isTargetInsideContainer = this.containerRef.current.children[0].contains(
      e.target,
    );
    if (e.keyCode === 27 || !isTargetInsideContainer) {
      onClose();
    }
  };

  render() {
    const { onClose } = this.props;
    return (
      <div style={styles.backdrop} ref={this.containerRef}>
        <div style={styles.modal}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            ipsum obcaecati maiores ipsam harum distinctio quia, soluta
            voluptatibus iste deserunt consectetur totam quas quidem, aliquid
            voluptatem nisi, nobis expedita quis?
          </p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
