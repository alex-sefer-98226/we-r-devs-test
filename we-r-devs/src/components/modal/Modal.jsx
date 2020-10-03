import React from "react";
import styles from "./modal.module.scss";
import { daysNames, monthNames } from "../../utils/dates";
const textDateFromNumber = (day) => {
  if (day === 1 || day === 21 || day === 31) {
    return day + "st";
  }
  if (day === 2 || day === 22) {
    return day + "nd";
  }
  if (day === 3 || day === 23) {
    return day + "rd";
  }
  return day + "th";
};
export const Modal = ({ isOpen, closeUp, selectedDate }) => {
  const date = selectedDate;
  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.inputWrapper}>
          <label htmlFor={"month"} className={styles.inputLabel}>
            Month
          </label>
          <input
            type={"text"}
            value={monthNames[date.getMonth()]}
            disabled={true}
            className={styles.inputText}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor={"month"} className={styles.inputLabel}>
            Day
          </label>
          <input
            type={"text"}
            value={
              textDateFromNumber(date.getDate()) +
              " " +
              daysNames[date.getDay()]
            }
            disabled={true}
            className={styles.inputText}
          />
        </div>
        <button className={styles.closeButton} onClick={() => closeUp()}>
          {}
        </button>
      </div>
    </div>
  );
};
