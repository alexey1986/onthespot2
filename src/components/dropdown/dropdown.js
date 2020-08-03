import React from 'react';
import styles from './dropdown.module.css';
import { ReactComponent as ReactIcon } from './icon.svg';

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayMenu: false,
            selectedValues: []
        };

        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
    }

    componentDidMount() {
        const { selected } = this.props;

        this.setState({ selectedValues: [selected.value] })
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

    hideDropdownMenu(){
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.handleClickOutside);
        });
    }

    handleChange = (e) => {
        const { selectedValues } = this.state;
        const currentValue = e.target.value;
        const currentItem = selectedValues.find(value => value === currentValue);

        if (currentItem) {
            const filtered = selectedValues.filter(value => value !== currentValue)

            this.setState({ selectedValues: filtered });
        } else {
            this.setState({ selectedValues: [...selectedValues, currentValue] });
        }
    }

    render() {
        const { options } = this.props;
        const { selectedValues } = this.state;

        const NumberList = () => {
            const listItems = options.map((item, i) =>
                <li className={styles.item} key={i}>
                    <input className={styles.checkbox} id={`checkbox_${i}`} value={item.value} checked={selectedValues.includes(item.value)} type="checkbox" onChange={this.handleChange} />
                    <label className={styles.label} htmlFor={`checkbox_${i}`}>
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
                    <div>{selectedValues.length ? selectedValues.map((item, i) => <span key={i}>{item}</span>) : 'Select'}</div>
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