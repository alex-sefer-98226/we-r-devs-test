import React from "react";
import classnames from "classnames";

import * as calendar from "./methods";

import styles from "./calendar.module.scss";
import { monthNames } from "../../utils/dates";

export default class Calendar extends React.Component {
  static defaultProps = {
    date: new Date(),
    years: [2019, 2020, 2021],
    monthNames,
    weekDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    // onChange: Function.prototype
  };

  state = {
    date: this.props.date,
    currentDate: new Date(),
    selectedDate: null,
  };

  get year() {
    return this.state.date.getFullYear();
  }

  get month() {
    return this.state.date.getMonth();
  }

  get day() {
    return this.state.date.getDate();
  }

  handlePrevMonthButtonClick = () => {
    const date = new Date(this.year, this.month - 1);

    this.setState({ date });
  };

  handleNextMonthButtonClick = () => {
    const date = new Date(this.year, this.month + 1);

    this.setState({ date });
  };

  handleSelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;

    const date = new Date(year, month);

    this.setState({ date });
  };

  handleDayClick = (date) => {
    this.setState({ selectedDate: date });
    // this.props.onChange(date);
    this.props.setDate(date);
    this.props.openModal();
  };

  render() {
    const { years, monthNames, weekDayNames } = this.props;
    const { currentDate, selectedDate } = this.state;

    const monthData = calendar.getMonthData(this.year, this.month);

    return (
      <div className={styles.wrapper}>
        <div className={styles.calendar}>
          <header className={styles.header}>
            <button
              onClick={this.handlePrevMonthButtonClick}
              className={classnames(styles.button, styles.left)}
            >
              <i className={classnames("fas fa-angle-left", styles.button)}></i>
            </button>

            {/*<select*/}
            {/*    ref={element => this.monthSelect = element}*/}
            {/*    value={this.month}*/}
            {/*    onChange={this.handleSelectChange}*/}
            {/*>*/}
            {/*    {monthNames.map((name, index) =>*/}
            {/*        <option key={name} value={index}>{name}</option>*/}
            {/*    )}*/}
            {/*</select>*/}

            {/*<select*/}
            {/*    ref={element => this.yearSelect = element}*/}
            {/*    value={this.year}*/}
            {/*    onChange={this.handleSelectChange}*/}
            {/*>*/}
            {/*    {years.map(year =>*/}
            {/*        <option key={year} value={year}>{year}</option>*/}
            {/*    )}*/}
            {/*</select>*/}
            <span className={styles.currentMonth}>
              {this.props.monthNames[this.month]} {this.year}
            </span>
            <button
              onClick={this.handleNextMonthButtonClick}
              className={classnames(styles.button, styles.right)}
            >
              <i
                className={classnames("fas fa-angle-right", styles.button)}
              ></i>
            </button>
          </header>

          <table className={styles.table}>
            <tbody className={styles.tbody}>
              {monthData.map((week, index) => (
                <tr key={week + index} className={styles.week}>
                  {week.map((date, index) =>
                    date ? (
                      <td
                        key={index}
                        className={classnames(
                          styles.day,
                          calendar.areEqual(date, currentDate)
                            ? styles.today
                            : "",
                          calendar.areEqual(date, selectedDate)
                            ? styles.selected
                            : ""
                        )}
                        onClick={() => this.handleDayClick(date)}
                      >
                        {date.getDate() < 10
                          ? "0" + date.getDate()
                          : date.getDate()}
                      </td>
                    ) : (
                      <td
                        key={index}
                        onClick={
                          index < 7
                            ? this.handlePrevMonthButtonClick
                            : this.handleNextMonthButtonClick
                        }
                      />
                    )
                  )}
                </tr>
              ))}
            </tbody>

            <tfoot className={styles.tft}>
              <tr className={styles.footerRow}>
                {weekDayNames.map((name, index) => (
                  <td key={name + index} className={styles.tf}>
                    {name}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
