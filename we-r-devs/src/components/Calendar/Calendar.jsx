import React from "react";
import classnames from "classnames";

import * as calendar from "./methods";

import styles from "./Calendar.module.scss";
import { monthNames } from "../../utils/dates";

export default class Calendar extends React.Component {
  static defaultProps = {
    date: new Date(),
    years: [2019, 2020, 2021],
    monthNames,
    weekDayNames: ["S", "M", "T", "W", "T", "F", "S"],
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
  handleDayClick = (date) => {
    this.setState({ selectedDate: date });
    this.props.setDate({
      month: date.getMonth(),
      day: date.getDate(),
      dayOfWeek: date.getDay(),
    });
    this.props.openModal();
  };

  render() {
    const { weekDayNames } = this.props;
    const { currentDate, selectedDate } = this.state;
    const monthData = calendar.getMonthData(this.year, this.month);
    return (
      <div className={styles.wrapper}>
        <div>
          <header className={styles.header}>
            <button
              onClick={this.handlePrevMonthButtonClick}
              className={styles.button}
            >
              <i className={classnames("fas fa-angle-left", styles.button)}></i>
            </button>

            <span className={styles.currentMonth}>
              {this.props.monthNames[this.month]} {this.year}
            </span>
            <button
              onClick={this.handleNextMonthButtonClick}
              className={styles.button}
            >
              <i
                className={classnames("fas fa-angle-right", styles.button)}
              ></i>
            </button>
          </header>

          <table className={styles.table}>
            <tbody>
              {monthData.map((week, index) => (
                <tr key={week + index}>
                  {week.map((date, weekIndex) =>
                    date ? (
                      <td
                        key={weekIndex}
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
                        key={weekIndex}
                        onClick={
                          index < 3
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
