import React, { PureComponent, createRef } from 'react';

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

export default class Modal extends PureComponent {
  containerRef = createRef();

  componentDidMount = () => {
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

  // eslint-disable-next-line consistent-return
  handleWindowKeyDown = e => {
    if (e.code !== 'Escape') {
      const b = '';
      return b;
    }
  };

  render() {
    return (
      <div
        style={styles.backdrop}
        ref={this.containerRef}
        onClick={this.handleClickBackdrop}
        onKeyDown={() => {}}
      >
        <div style={styles.modal}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            ipsum obcaecati maiores ipsam harum distinctio quia, soluta
            voluptatibus iste deserunt consectetur totam quas quidem, aliquid
            voluptatem nisi, nobis expedita quis?
          </p>
          <button type="button">Close</button>
        </div>
      </div>
    );
  }
}
