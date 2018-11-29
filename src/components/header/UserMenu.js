import React, { Component, createRef } from 'react';
import Dropdown from './Dropdown';

class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isModalOpen: false,
  };

  componentDidMount = () => {
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleWindowClick);
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    const { isModalOpen } = this.state;
    return nextState.isModalOpen !== isModalOpen;
  };

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keydown', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    const { isModalOpen } = this.state;
    if (
      (isModalOpen && e.keyCode === 27) ||
      (isModalOpen && !isTargetInsideContainer)
    ) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isModalOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const {
      alt,
      srcUserLogo,
      logoWidth,
      logoHeight,
      userLogin = 'Bob Ross',
    } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div
        onClick={this.openDropdown}
        onKeyPress={() => {}}
        ref={this.containerRef}
      >
        <div>
          <img
            alt={alt}
            src={srcUserLogo}
            width={logoWidth}
            height={logoHeight}
          />
          <span>{userLogin}</span>
        </div>

        {isModalOpen && <Dropdown />}
      </div>
    );
  }
}

export default UserMenu;
