import React from 'react';
import styles from './dropdown.module.css';
import {ReactComponent as ReactIcon} from './icon.svg';

export default class Dropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false
        };

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.hideDropdownMenu()
        }
    }

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.handleClickOutside);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.handleClickOutside);
        });
    }

    render() {
        const { options, selected } = this.props;

        const NumberList = () => {
            const listItems = options.map((item, i) =>
                <li className={styles.item} key={i}>
                    <input className={styles.checkbox} id={`checkbox_${i}`} type="checkbox" />
                    <label className={styles.label} for={`checkbox_${i}`}>
                        {item.value}
                    </label>
                </li>
            );
            return (
                <ul className={styles.list} ref={this.setWrapperRef}>{listItems}</ul>
            );
        }

        return (
            <div className={`${styles.dropdown} ${this.state.displayMenu ? `${styles.active}` : ''}`}>
                <div className={styles.button} onClick={(e) => this.showDropdownMenu(e)}>
                    {selected.label}
                    <ReactIcon className={styles.icon} />
                </div>
                {this.state.displayMenu ? (
                    <NumberList />
                ) :
                    (
                        null
                    )
                }
            </div>
        );
    }
}
