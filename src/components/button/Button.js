import React, { Component } from 'react';
import styles from './button.module.css';

class Button extends Component {
  render() {
    return (
        <button
          className={this.props.type === "transparent" ? styles.buttonLink : styles.button}
          onClick={this.props.handleClick}>{this.props.children}</button>
      );
  }
}
export default Button;